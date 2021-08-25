
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_input_value(input, value) {
        input.value = value == null ? '' : value;
    }
    function set_style(node, key, value, important) {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
    function custom_event(type, detail, bubbles = false) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : options.context || []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.42.1' }, detail), true));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src/App.svelte generated by Svelte v3.42.1 */

    const file = "src/App.svelte";

    // (70:2) {:else}
    function create_else_block(ctx) {
    	let h4;

    	const block = {
    		c: function create() {
    			h4 = element("h4");
    			h4.textContent = "I appreciate the feedback!";
    			add_location(h4, file, 70, 2, 1663);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h4, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h4);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(70:2) {:else}",
    		ctx
    	});

    	return block;
    }

    // (68:2) {#if votedEthan == true}
    function create_if_block(ctx) {
    	let h4;

    	const block = {
    		c: function create() {
    			h4 = element("h4");
    			h4.textContent = "Voter feedback is my #1 priority!";
    			add_location(h4, file, 68, 2, 1608);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h4, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h4);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(68:2) {#if votedEthan == true}",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let main;
    	let h2;
    	let t1;
    	let div0;
    	let h4;
    	let t3;
    	let table;
    	let tr0;
    	let input;
    	let t4;
    	let tr1;
    	let textarea;
    	let t5;
    	let tr2;
    	let button0;
    	let t6;
    	let t7;
    	let tr3;
    	let button1;
    	let t8;
    	let t9;
    	let t10;
    	let div0_style_value;
    	let t11;
    	let div1;
    	let p0;
    	let t12;
    	let t13;
    	let t14;
    	let button2;
    	let div1_style_value;
    	let t16;
    	let footer;
    	let a;
    	let p1;
    	let mounted;
    	let dispose;

    	function select_block_type(ctx, dirty) {
    		if (/*votedEthan*/ ctx[4] == true) return create_if_block;
    		return create_else_block;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			main = element("main");
    			h2 = element("h2");
    			h2.textContent = "PLTW EDD Suggestions";
    			t1 = space();
    			div0 = element("div");
    			h4 = element("h4");
    			h4.textContent = "Have a suggestion for the class? Leave a comment here!";
    			t3 = space();
    			table = element("table");
    			tr0 = element("tr");
    			input = element("input");
    			t4 = space();
    			tr1 = element("tr");
    			textarea = element("textarea");
    			t5 = space();
    			tr2 = element("tr");
    			button0 = element("button");
    			t6 = text(/*myVote*/ ctx[5]);
    			t7 = space();
    			tr3 = element("tr");
    			button1 = element("button");
    			t8 = text("Send for ");
    			t9 = text(/*importance*/ ctx[3]);
    			t10 = text(" consideration");
    			t11 = space();
    			div1 = element("div");
    			p0 = element("p");
    			t12 = text(/*thankYou*/ ctx[1]);
    			t13 = space();
    			if_block.c();
    			t14 = space();
    			button2 = element("button");
    			button2.textContent = "Send Another Message";
    			t16 = space();
    			footer = element("footer");
    			a = element("a");
    			p1 = element("p");
    			p1.textContent = "View GitHub";
    			add_location(h2, file, 36, 1, 816);
    			set_style(h4, "color", "gray");
    			add_location(h4, file, 38, 1, 916);
    			attr_dev(input, "type", "text");
    			attr_dev(input, "placeholder", "Full Name");
    			attr_dev(input, "class", "nameArea svelte-18bb3y7");
    			add_location(input, file, 41, 3, 1020);
    			add_location(tr0, file, 40, 2, 1012);
    			attr_dev(textarea, "rows", "5");
    			attr_dev(textarea, "type", "text");
    			attr_dev(textarea, "placeholder", "I suggest that...");
    			attr_dev(textarea, "class", "inputArea svelte-18bb3y7");
    			add_location(textarea, file, 49, 3, 1134);
    			add_location(tr1, file, 48, 2, 1126);
    			attr_dev(button0, "class", "questionButton svelte-18bb3y7");
    			attr_dev(button0, "id", "button1");
    			add_location(button0, file, 58, 3, 1275);
    			add_location(tr2, file, 57, 2, 1267);
    			attr_dev(button1, "class", "Send svelte-18bb3y7");
    			add_location(button1, file, 61, 3, 1381);
    			add_location(tr3, file, 60, 2, 1373);
    			attr_dev(table, "class", "svelte-18bb3y7");
    			add_location(table, file, 39, 1, 1002);
    			attr_dev(div0, "id", "form-container");
    			attr_dev(div0, "style", div0_style_value = /*sent*/ ctx[6] ? 'opacity: 0' : 'opacity:1');
    			add_location(div0, file, 37, 1, 847);
    			add_location(p0, file, 66, 2, 1560);
    			attr_dev(button2, "class", "Send svelte-18bb3y7");
    			add_location(button2, file, 72, 2, 1709);
    			attr_dev(div1, "id", "form-container");
    			attr_dev(div1, "style", div1_style_value = /*sent*/ ctx[6] ? 'opacity: 1' : 'opacity:0');
    			add_location(div1, file, 65, 1, 1490);
    			add_location(p1, file, 83, 3, 2182);
    			attr_dev(a, "href", "https://github.com/glowingember/pltw");
    			attr_dev(a, "class", "svelte-18bb3y7");
    			add_location(a, file, 82, 2, 2131);
    			attr_dev(footer, "style", " display: inline-flex; -webkit-touch-callout: none; /* iOS Safari */ \n\t-webkit-user-select: none; /* Safari */\n\t-khtml-user-select: none; /* Konqueror HTML */\n\t-moz-user-select: none; /* Old versions of Firefox */\n\t-ms-user-select: none; /* Internet Explorer/Edge */\n\tuser-select: none; /* Non-prefixed version, currently */");
    			add_location(footer, file, 75, 1, 1786);
    			attr_dev(main, "class", "svelte-18bb3y7");
    			add_location(main, file, 35, 0, 808);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, main, anchor);
    			append_dev(main, h2);
    			append_dev(main, t1);
    			append_dev(main, div0);
    			append_dev(div0, h4);
    			append_dev(div0, t3);
    			append_dev(div0, table);
    			append_dev(table, tr0);
    			append_dev(tr0, input);
    			set_input_value(input, /*name*/ ctx[0]);
    			append_dev(table, t4);
    			append_dev(table, tr1);
    			append_dev(tr1, textarea);
    			set_input_value(textarea, /*message*/ ctx[2]);
    			append_dev(table, t5);
    			append_dev(table, tr2);
    			append_dev(tr2, button0);
    			append_dev(button0, t6);
    			append_dev(table, t7);
    			append_dev(table, tr3);
    			append_dev(tr3, button1);
    			append_dev(button1, t8);
    			append_dev(button1, t9);
    			append_dev(button1, t10);
    			append_dev(main, t11);
    			append_dev(main, div1);
    			append_dev(div1, p0);
    			append_dev(p0, t12);
    			append_dev(div1, t13);
    			if_block.m(div1, null);
    			append_dev(div1, t14);
    			append_dev(div1, button2);
    			append_dev(main, t16);
    			append_dev(main, footer);
    			append_dev(footer, a);
    			append_dev(a, p1);

    			if (!mounted) {
    				dispose = [
    					listen_dev(input, "input", /*input_input_handler*/ ctx[10]),
    					listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[11]),
    					listen_dev(button0, "click", /*importanceCalc*/ ctx[7], false, false, false),
    					listen_dev(button1, "click", /*send*/ ctx[8], false, false, false),
    					listen_dev(button2, "click", /*redo*/ ctx[9], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*name*/ 1 && input.value !== /*name*/ ctx[0]) {
    				set_input_value(input, /*name*/ ctx[0]);
    			}

    			if (dirty & /*message*/ 4) {
    				set_input_value(textarea, /*message*/ ctx[2]);
    			}

    			if (dirty & /*myVote*/ 32) set_data_dev(t6, /*myVote*/ ctx[5]);
    			if (dirty & /*importance*/ 8) set_data_dev(t9, /*importance*/ ctx[3]);

    			if (dirty & /*sent*/ 64 && div0_style_value !== (div0_style_value = /*sent*/ ctx[6] ? 'opacity: 0' : 'opacity:1')) {
    				attr_dev(div0, "style", div0_style_value);
    			}

    			if (dirty & /*thankYou*/ 2) set_data_dev(t12, /*thankYou*/ ctx[1]);

    			if (current_block_type !== (current_block_type = select_block_type(ctx))) {
    				if_block.d(1);
    				if_block = current_block_type(ctx);

    				if (if_block) {
    					if_block.c();
    					if_block.m(div1, t14);
    				}
    			}

    			if (dirty & /*sent*/ 64 && div1_style_value !== (div1_style_value = /*sent*/ ctx[6] ? 'opacity: 1' : 'opacity:0')) {
    				attr_dev(div1, "style", div1_style_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(main);
    			if_block.d();
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	let name;
    	let thankYou;
    	let message;
    	let importance = "potential";
    	let votedEthan = false;
    	let myVote = "No, I did not vote for Ethan and Henry";
    	let sent = false;

    	function importanceCalc() {
    		if (votedEthan == true) {
    			document.getElementById("button1").classList.add('questionButton');
    			$$invalidate(3, importance = 'potential');
    			$$invalidate(4, votedEthan = false);
    			$$invalidate(5, myVote = "No, I did not vote for Ethan and Henry");
    		} else if (votedEthan == false) {
    			document.getElementById("button1").classList.remove('questionButton');
    			$$invalidate(4, votedEthan = true);
    			$$invalidate(3, importance = 'guaranteed');
    			$$invalidate(5, myVote = "Yes, I did vote for Ethan and Henry");
    		}
    	}

    	function send() {
    		if (name != null) {
    			$$invalidate(1, thankYou = "Thank you, " + name.split(" ")[0] + "!");
    		} else {
    			$$invalidate(1, thankYou = "Thank you!");
    		}

    		$$invalidate(6, sent = true);
    	}

    	function redo() {
    		$$invalidate(6, sent = false);
    	}

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	function input_input_handler() {
    		name = this.value;
    		$$invalidate(0, name);
    	}

    	function textarea_input_handler() {
    		message = this.value;
    		$$invalidate(2, message);
    	}

    	$$self.$capture_state = () => ({
    		name,
    		thankYou,
    		message,
    		importance,
    		votedEthan,
    		myVote,
    		sent,
    		importanceCalc,
    		send,
    		redo
    	});

    	$$self.$inject_state = $$props => {
    		if ('name' in $$props) $$invalidate(0, name = $$props.name);
    		if ('thankYou' in $$props) $$invalidate(1, thankYou = $$props.thankYou);
    		if ('message' in $$props) $$invalidate(2, message = $$props.message);
    		if ('importance' in $$props) $$invalidate(3, importance = $$props.importance);
    		if ('votedEthan' in $$props) $$invalidate(4, votedEthan = $$props.votedEthan);
    		if ('myVote' in $$props) $$invalidate(5, myVote = $$props.myVote);
    		if ('sent' in $$props) $$invalidate(6, sent = $$props.sent);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		name,
    		thankYou,
    		message,
    		importance,
    		votedEthan,
    		myVote,
    		sent,
    		importanceCalc,
    		send,
    		redo,
    		input_input_handler,
    		textarea_input_handler
    	];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
    	target: document.body,
    	props: {
    		name: 'world'
    	}
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
