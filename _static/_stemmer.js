// generatedy by JSX compiler 0.9.89 (2014-05-20 06:01:03 +0900; 8e8c6105f36f3dfe440ea026a3c93a3444977102)
var JSX = {};
(function (JSX) {
/**
 * extends the class
 */
function $__jsx_extend(derivations, base) {
	var ctor = function () {};
	ctor.prototype = base.prototype;
	var proto = new ctor();
	for (var i in derivations) {
		derivations[i].prototype = proto;
	}
}

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

var $__jsx_imul = Math.imul;
if (typeof $__jsx_imul === "undefined") {
	$__jsx_imul = function (a, b) {
		var ah  = (a >>> 16) & 0xffff;
		var al = a & 0xffff;
		var bh  = (b >>> 16) & 0xffff;
		var bl = b & 0xffff;
		return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
	};
}

/**
 * fused int-ops with side-effects
 */
function $__jsx_ipadd(o, p, r) {
	return o[p] = (o[p] + r) | 0;
}
function $__jsx_ipsub(o, p, r) {
	return o[p] = (o[p] - r) | 0;
}
function $__jsx_ipmul(o, p, r) {
	return o[p] = $__jsx_imul(o[p], r);
}
function $__jsx_ipdiv(o, p, r) {
	return o[p] = (o[p] / r) | 0;
}
function $__jsx_ipmod(o, p, r) {
	return o[p] = (o[p] % r) | 0;
}
function $__jsx_ippostinc(o, p) {
	var v = o[p];
	o[p] = (v + 1) | 0;
	return v;
}
function $__jsx_ippostdec(o, p) {
	var v = o[p];
	o[p] = (v - 1) | 0;
	return v;
}

/**
 * non-inlined version of Array#each
 */
function $__jsx_forEach(o, f) {
	var l = o.length;
	for (var i = 0; i < l; ++i)
		f(o[i]);
}

/*
 * global functions, renamed to avoid conflict with local variable names
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
function $__jsx_isNaN(n) { return n !== n; }
var $__jsx_isFinite = isFinite;

var $__jsx_encodeURIComponent = encodeURIComponent;
var $__jsx_decodeURIComponent = decodeURIComponent;
var $__jsx_encodeURI = encodeURI;
var $__jsx_decodeURI = decodeURI;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * profiler object, initialized afterwards
 */
function $__jsx_profiler() {
}

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
};

JSX.profilerIsRunning = function () {
	return $__jsx_profiler.getResults != null;
};

JSX.getProfileResults = function () {
	return ($__jsx_profiler.getResults || function () { return {}; })();
};

JSX.postProfileResults = function (url, cb) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url, cb);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
JSX.DEBUG = false;
var GeneratorFunction$0 = 
(function () {
  try {
    return Function('import {GeneratorFunction} from "std:iteration"; return GeneratorFunction')();
  } catch (e) {
    return function GeneratorFunction () {};
  }
})();
var __jsx_generator_object$0 = 
(function () {
  function __jsx_generator_object() {
  	this.__next = 0;
  	this.__loop = null;
	this.__seed = null;
  	this.__value = undefined;
  	this.__status = 0;	// SUSPENDED: 0, ACTIVE: 1, DEAD: 2
  }

  __jsx_generator_object.prototype.next = function (seed) {
  	switch (this.__status) {
  	case 0:
  		this.__status = 1;
  		this.__seed = seed;

  		// go next!
  		this.__loop(this.__next);

  		var done = false;
  		if (this.__next != -1) {
  			this.__status = 0;
  		} else {
  			this.__status = 2;
  			done = true;
  		}
  		return { value: this.__value, done: done };
  	case 1:
  		throw new Error("Generator is already running");
  	case 2:
  		throw new Error("Generator is already finished");
  	default:
  		throw new Error("Unexpected generator internal state");
  	}
  };

  return __jsx_generator_object;
}());
function Among(s, substring_i, result) {
	this.s_size = s.length;
	this.s = s;
	this.substring_i = substring_i;
	this.result = result;
	this.method = null;
	this.instance = null;
};

function Among$0(s, substring_i, result, method, instance) {
	this.s_size = s.length;
	this.s = s;
	this.substring_i = substring_i;
	this.result = result;
	this.method = method;
	this.instance = instance;
};

$__jsx_extend([Among, Among$0], Object);
function Stemmer() {
};

$__jsx_extend([Stemmer], Object);
function BaseStemmer() {
	var current$0;
	var cursor$0;
	var limit$0;
	this.cache = ({  });
	current$0 = this.current = "";
	cursor$0 = this.cursor = 0;
	limit$0 = this.limit = current$0.length;
	this.limit_backward = 0;
	this.bra = cursor$0;
	this.ket = limit$0;
};

$__jsx_extend([BaseStemmer], Stemmer);
BaseStemmer.prototype.setCurrent$S = function (value) {
	var current$0;
	var cursor$0;
	var limit$0;
	current$0 = this.current = value;
	cursor$0 = this.cursor = 0;
	limit$0 = this.limit = current$0.length;
	this.limit_backward = 0;
	this.bra = cursor$0;
	this.ket = limit$0;
};


function BaseStemmer$setCurrent$LBaseStemmer$S($this, value) {
	var current$0;
	var cursor$0;
	var limit$0;
	current$0 = $this.current = value;
	cursor$0 = $this.cursor = 0;
	limit$0 = $this.limit = current$0.length;
	$this.limit_backward = 0;
	$this.bra = cursor$0;
	$this.ket = limit$0;
};

BaseStemmer.setCurrent$LBaseStemmer$S = BaseStemmer$setCurrent$LBaseStemmer$S;

BaseStemmer.prototype.getCurrent$ = function () {
	return this.current;
};


function BaseStemmer$getCurrent$LBaseStemmer$($this) {
	return $this.current;
};

BaseStemmer.getCurrent$LBaseStemmer$ = BaseStemmer$getCurrent$LBaseStemmer$;

BaseStemmer.prototype.copy_from$LBaseStemmer$ = function (other) {
	this.current = other.current;
	this.cursor = other.cursor;
	this.limit = other.limit;
	this.limit_backward = other.limit_backward;
	this.bra = other.bra;
	this.ket = other.ket;
};


function BaseStemmer$copy_from$LBaseStemmer$LBaseStemmer$($this, other) {
	$this.current = other.current;
	$this.cursor = other.cursor;
	$this.limit = other.limit;
	$this.limit_backward = other.limit_backward;
	$this.bra = other.bra;
	$this.ket = other.ket;
};

BaseStemmer.copy_from$LBaseStemmer$LBaseStemmer$ = BaseStemmer$copy_from$LBaseStemmer$LBaseStemmer$;

BaseStemmer.prototype.in_grouping$AIII = function (s, min, max) {
	var ch;
	var $__jsx_postinc_t;
	if (this.cursor >= this.limit) {
		return false;
	}
	ch = this.current.charCodeAt(this.cursor);
	if (ch > max || ch < min) {
		return false;
	}
	ch -= min;
	if ((s[ch >>> 3] & 0x1 << (ch & 0x7)) === 0) {
		return false;
	}
	($__jsx_postinc_t = this.cursor, this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
	return true;
};


function BaseStemmer$in_grouping$LBaseStemmer$AIII($this, s, min, max) {
	var ch;
	var $__jsx_postinc_t;
	if ($this.cursor >= $this.limit) {
		return false;
	}
	ch = $this.current.charCodeAt($this.cursor);
	if (ch > max || ch < min) {
		return false;
	}
	ch -= min;
	if ((s[ch >>> 3] & 0x1 << (ch & 0x7)) === 0) {
		return false;
	}
	($__jsx_postinc_t = $this.cursor, $this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
	return true;
};

BaseStemmer.in_grouping$LBaseStemmer$AIII = BaseStemmer$in_grouping$LBaseStemmer$AIII;

BaseStemmer.prototype.in_grouping_b$AIII = function (s, min, max) {
	var ch;
	var $__jsx_postinc_t;
	if (this.cursor <= this.limit_backward) {
		return false;
	}
	ch = this.current.charCodeAt(this.cursor - 1);
	if (ch > max || ch < min) {
		return false;
	}
	ch -= min;
	if ((s[ch >>> 3] & 0x1 << (ch & 0x7)) === 0) {
		return false;
	}
	($__jsx_postinc_t = this.cursor, this.cursor = ($__jsx_postinc_t - 1) | 0, $__jsx_postinc_t);
	return true;
};


function BaseStemmer$in_grouping_b$LBaseStemmer$AIII($this, s, min, max) {
	var ch;
	var $__jsx_postinc_t;
	if ($this.cursor <= $this.limit_backward) {
		return false;
	}
	ch = $this.current.charCodeAt($this.cursor - 1);
	if (ch > max || ch < min) {
		return false;
	}
	ch -= min;
	if ((s[ch >>> 3] & 0x1 << (ch & 0x7)) === 0) {
		return false;
	}
	($__jsx_postinc_t = $this.cursor, $this.cursor = ($__jsx_postinc_t - 1) | 0, $__jsx_postinc_t);
	return true;
};

BaseStemmer.in_grouping_b$LBaseStemmer$AIII = BaseStemmer$in_grouping_b$LBaseStemmer$AIII;

BaseStemmer.prototype.out_grouping$AIII = function (s, min, max) {
	var ch;
	var $__jsx_postinc_t;
	if (this.cursor >= this.limit) {
		return false;
	}
	ch = this.current.charCodeAt(this.cursor);
	if (ch > max || ch < min) {
		($__jsx_postinc_t = this.cursor, this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
		return true;
	}
	ch -= min;
	if ((s[ch >>> 3] & 0X1 << (ch & 0x7)) === 0) {
		($__jsx_postinc_t = this.cursor, this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
		return true;
	}
	return false;
};


function BaseStemmer$out_grouping$LBaseStemmer$AIII($this, s, min, max) {
	var ch;
	var $__jsx_postinc_t;
	if ($this.cursor >= $this.limit) {
		return false;
	}
	ch = $this.current.charCodeAt($this.cursor);
	if (ch > max || ch < min) {
		($__jsx_postinc_t = $this.cursor, $this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
		return true;
	}
	ch -= min;
	if ((s[ch >>> 3] & 0X1 << (ch & 0x7)) === 0) {
		($__jsx_postinc_t = $this.cursor, $this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
		return true;
	}
	return false;
};

BaseStemmer.out_grouping$LBaseStemmer$AIII = BaseStemmer$out_grouping$LBaseStemmer$AIII;

BaseStemmer.prototype.out_grouping_b$AIII = function (s, min, max) {
	var ch;
	var $__jsx_postinc_t;
	if (this.cursor <= this.limit_backward) {
		return false;
	}
	ch = this.current.charCodeAt(this.cursor - 1);
	if (ch > max || ch < min) {
		($__jsx_postinc_t = this.cursor, this.cursor = ($__jsx_postinc_t - 1) | 0, $__jsx_postinc_t);
		return true;
	}
	ch -= min;
	if ((s[ch >>> 3] & 0x1 << (ch & 0x7)) === 0) {
		($__jsx_postinc_t = this.cursor, this.cursor = ($__jsx_postinc_t - 1) | 0, $__jsx_postinc_t);
		return true;
	}
	return false;
};


function BaseStemmer$out_grouping_b$LBaseStemmer$AIII($this, s, min, max) {
	var ch;
	var $__jsx_postinc_t;
	if ($this.cursor <= $this.limit_backward) {
		return false;
	}
	ch = $this.current.charCodeAt($this.cursor - 1);
	if (ch > max || ch < min) {
		($__jsx_postinc_t = $this.cursor, $this.cursor = ($__jsx_postinc_t - 1) | 0, $__jsx_postinc_t);
		return true;
	}
	ch -= min;
	if ((s[ch >>> 3] & 0x1 << (ch & 0x7)) === 0) {
		($__jsx_postinc_t = $this.cursor, $this.cursor = ($__jsx_postinc_t - 1) | 0, $__jsx_postinc_t);
		return true;
	}
	return false;
};

BaseStemmer.out_grouping_b$LBaseStemmer$AIII = BaseStemmer$out_grouping_b$LBaseStemmer$AIII;

BaseStemmer.prototype.in_range$II = function (min, max) {
	var ch;
	var $__jsx_postinc_t;
	if (this.cursor >= this.limit) {
		return false;
	}
	ch = this.current.charCodeAt(this.cursor);
	if (ch > max || ch < min) {
		return false;
	}
	($__jsx_postinc_t = this.cursor, this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
	return true;
};


function BaseStemmer$in_range$LBaseStemmer$II($this, min, max) {
	var ch;
	var $__jsx_postinc_t;
	if ($this.cursor >= $this.limit) {
		return false;
	}
	ch = $this.current.charCodeAt($this.cursor);
	if (ch > max || ch < min) {
		return false;
	}
	($__jsx_postinc_t = $this.cursor, $this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
	return true;
};

BaseStemmer.in_range$LBaseStemmer$II = BaseStemmer$in_range$LBaseStemmer$II;

BaseStemmer.prototype.in_range_b$II = function (min, max) {
	var ch;
	var $__jsx_postinc_t;
	if (this.cursor <= this.limit_backward) {
		return false;
	}
	ch = this.current.charCodeAt(this.cursor - 1);
	if (ch > max || ch < min) {
		return false;
	}
	($__jsx_postinc_t = this.cursor, this.cursor = ($__jsx_postinc_t - 1) | 0, $__jsx_postinc_t);
	return true;
};


function BaseStemmer$in_range_b$LBaseStemmer$II($this, min, max) {
	var ch;
	var $__jsx_postinc_t;
	if ($this.cursor <= $this.limit_backward) {
		return false;
	}
	ch = $this.current.charCodeAt($this.cursor - 1);
	if (ch > max || ch < min) {
		return false;
	}
	($__jsx_postinc_t = $this.cursor, $this.cursor = ($__jsx_postinc_t - 1) | 0, $__jsx_postinc_t);
	return true;
};

BaseStemmer.in_range_b$LBaseStemmer$II = BaseStemmer$in_range_b$LBaseStemmer$II;

BaseStemmer.prototype.out_range$II = function (min, max) {
	var ch;
	var $__jsx_postinc_t;
	if (this.cursor >= this.limit) {
		return false;
	}
	ch = this.current.charCodeAt(this.cursor);
	if (! (ch > max || ch < min)) {
		return false;
	}
	($__jsx_postinc_t = this.cursor, this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
	return true;
};


function BaseStemmer$out_range$LBaseStemmer$II($this, min, max) {
	var ch;
	var $__jsx_postinc_t;
	if ($this.cursor >= $this.limit) {
		return false;
	}
	ch = $this.current.charCodeAt($this.cursor);
	if (! (ch > max || ch < min)) {
		return false;
	}
	($__jsx_postinc_t = $this.cursor, $this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
	return true;
};

BaseStemmer.out_range$LBaseStemmer$II = BaseStemmer$out_range$LBaseStemmer$II;

BaseStemmer.prototype.out_range_b$II = function (min, max) {
	var ch;
	var $__jsx_postinc_t;
	if (this.cursor <= this.limit_backward) {
		return false;
	}
	ch = this.current.charCodeAt(this.cursor - 1);
	if (! (ch > max || ch < min)) {
		return false;
	}
	($__jsx_postinc_t = this.cursor, this.cursor = ($__jsx_postinc_t - 1) | 0, $__jsx_postinc_t);
	return true;
};


function BaseStemmer$out_range_b$LBaseStemmer$II($this, min, max) {
	var ch;
	var $__jsx_postinc_t;
	if ($this.cursor <= $this.limit_backward) {
		return false;
	}
	ch = $this.current.charCodeAt($this.cursor - 1);
	if (! (ch > max || ch < min)) {
		return false;
	}
	($__jsx_postinc_t = $this.cursor, $this.cursor = ($__jsx_postinc_t - 1) | 0, $__jsx_postinc_t);
	return true;
};

BaseStemmer.out_range_b$LBaseStemmer$II = BaseStemmer$out_range_b$LBaseStemmer$II;

BaseStemmer.prototype.eq_s$IS = function (s_size, s) {
	var cursor$0;
	if (((this.limit - this.cursor) | 0) < s_size) {
		return false;
	}
	if (this.current.slice(cursor$0 = this.cursor, ((cursor$0 + s_size) | 0)) !== s) {
		return false;
	}
	this.cursor = (this.cursor + s_size) | 0;
	return true;
};


function BaseStemmer$eq_s$LBaseStemmer$IS($this, s_size, s) {
	var cursor$0;
	if ((($this.limit - $this.cursor) | 0) < s_size) {
		return false;
	}
	if ($this.current.slice(cursor$0 = $this.cursor, ((cursor$0 + s_size) | 0)) !== s) {
		return false;
	}
	$this.cursor = ($this.cursor + s_size) | 0;
	return true;
};

BaseStemmer.eq_s$LBaseStemmer$IS = BaseStemmer$eq_s$LBaseStemmer$IS;

BaseStemmer.prototype.eq_s_b$IS = function (s_size, s) {
	var cursor$0;
	if (((this.cursor - this.limit_backward) | 0) < s_size) {
		return false;
	}
	if (this.current.slice((((cursor$0 = this.cursor) - s_size) | 0), cursor$0) !== s) {
		return false;
	}
	this.cursor = (this.cursor - s_size) | 0;
	return true;
};


function BaseStemmer$eq_s_b$LBaseStemmer$IS($this, s_size, s) {
	var cursor$0;
	if ((($this.cursor - $this.limit_backward) | 0) < s_size) {
		return false;
	}
	if ($this.current.slice((((cursor$0 = $this.cursor) - s_size) | 0), cursor$0) !== s) {
		return false;
	}
	$this.cursor = ($this.cursor - s_size) | 0;
	return true;
};

BaseStemmer.eq_s_b$LBaseStemmer$IS = BaseStemmer$eq_s_b$LBaseStemmer$IS;

BaseStemmer.prototype.eq_v$S = function (s) {
	return BaseStemmer$eq_s$LBaseStemmer$IS(this, s.length, s);
};


function BaseStemmer$eq_v$LBaseStemmer$S($this, s) {
	return BaseStemmer$eq_s$LBaseStemmer$IS($this, s.length, s);
};

BaseStemmer.eq_v$LBaseStemmer$S = BaseStemmer$eq_v$LBaseStemmer$S;

BaseStemmer.prototype.eq_v_b$S = function (s) {
	return BaseStemmer$eq_s_b$LBaseStemmer$IS(this, s.length, s);
};


function BaseStemmer$eq_v_b$LBaseStemmer$S($this, s) {
	return BaseStemmer$eq_s_b$LBaseStemmer$IS($this, s.length, s);
};

BaseStemmer.eq_v_b$LBaseStemmer$S = BaseStemmer$eq_v_b$LBaseStemmer$S;

BaseStemmer.prototype.find_among$ALAmong$I = function (v, v_size) {
	var i;
	var j;
	var c;
	var l;
	var common_i;
	var common_j;
	var first_key_inspected;
	var k;
	var diff;
	var common;
	var w;
	var i2;
	var res;
	i = 0;
	j = v_size;
	c = this.cursor;
	l = this.limit;
	common_i = 0;
	common_j = 0;
	first_key_inspected = false;
	while (true) {
		k = i + (j - i >>> 1);
		diff = 0;
		common = (common_i < common_j ? common_i : common_j);
		w = v[k];
		for (i2 = common; i2 < w.s_size; i2++) {
			if (c + common === l) {
				diff = -1;
				break;
			}
			diff = this.current.charCodeAt(c + common) - w.s.charCodeAt(i2);
			if (diff !== 0) {
				break;
			}
			common++;
		}
		if (diff < 0) {
			j = k;
			common_j = common;
		} else {
			i = k;
			common_i = common;
		}
		if (j - i <= 1) {
			if (i > 0) {
				break;
			}
			if (j === i) {
				break;
			}
			if (first_key_inspected) {
				break;
			}
			first_key_inspected = true;
		}
	}
	while (true) {
		w = v[i];
		if (common_i >= w.s_size) {
			this.cursor = (c + w.s_size | 0);
			if (w.method == null) {
				return w.result;
			}
			res = w.method(w.instance);
			this.cursor = (c + w.s_size | 0);
			if (res) {
				return w.result;
			}
		}
		i = w.substring_i;
		if (i < 0) {
			return 0;
		}
	}
	return -1;
};


function BaseStemmer$find_among$LBaseStemmer$ALAmong$I($this, v, v_size) {
	var i;
	var j;
	var c;
	var l;
	var common_i;
	var common_j;
	var first_key_inspected;
	var k;
	var diff;
	var common;
	var w;
	var i2;
	var res;
	i = 0;
	j = v_size;
	c = $this.cursor;
	l = $this.limit;
	common_i = 0;
	common_j = 0;
	first_key_inspected = false;
	while (true) {
		k = i + (j - i >>> 1);
		diff = 0;
		common = (common_i < common_j ? common_i : common_j);
		w = v[k];
		for (i2 = common; i2 < w.s_size; i2++) {
			if (c + common === l) {
				diff = -1;
				break;
			}
			diff = $this.current.charCodeAt(c + common) - w.s.charCodeAt(i2);
			if (diff !== 0) {
				break;
			}
			common++;
		}
		if (diff < 0) {
			j = k;
			common_j = common;
		} else {
			i = k;
			common_i = common;
		}
		if (j - i <= 1) {
			if (i > 0) {
				break;
			}
			if (j === i) {
				break;
			}
			if (first_key_inspected) {
				break;
			}
			first_key_inspected = true;
		}
	}
	while (true) {
		w = v[i];
		if (common_i >= w.s_size) {
			$this.cursor = (c + w.s_size | 0);
			if (w.method == null) {
				return w.result;
			}
			res = w.method(w.instance);
			$this.cursor = (c + w.s_size | 0);
			if (res) {
				return w.result;
			}
		}
		i = w.substring_i;
		if (i < 0) {
			return 0;
		}
	}
	return -1;
};

BaseStemmer.find_among$LBaseStemmer$ALAmong$I = BaseStemmer$find_among$LBaseStemmer$ALAmong$I;

BaseStemmer.prototype.find_among_b$ALAmong$I = function (v, v_size) {
	var i;
	var j;
	var c;
	var lb;
	var common_i;
	var common_j;
	var first_key_inspected;
	var k;
	var diff;
	var common;
	var w;
	var i2;
	var res;
	i = 0;
	j = v_size;
	c = this.cursor;
	lb = this.limit_backward;
	common_i = 0;
	common_j = 0;
	first_key_inspected = false;
	while (true) {
		k = i + (j - i >> 1);
		diff = 0;
		common = (common_i < common_j ? common_i : common_j);
		w = v[k];
		for (i2 = w.s_size - 1 - common; i2 >= 0; i2--) {
			if (c - common === lb) {
				diff = -1;
				break;
			}
			diff = this.current.charCodeAt(c - 1 - common) - w.s.charCodeAt(i2);
			if (diff !== 0) {
				break;
			}
			common++;
		}
		if (diff < 0) {
			j = k;
			common_j = common;
		} else {
			i = k;
			common_i = common;
		}
		if (j - i <= 1) {
			if (i > 0) {
				break;
			}
			if (j === i) {
				break;
			}
			if (first_key_inspected) {
				break;
			}
			first_key_inspected = true;
		}
	}
	while (true) {
		w = v[i];
		if (common_i >= w.s_size) {
			this.cursor = (c - w.s_size | 0);
			if (w.method == null) {
				return w.result;
			}
			res = w.method(this);
			this.cursor = (c - w.s_size | 0);
			if (res) {
				return w.result;
			}
		}
		i = w.substring_i;
		if (i < 0) {
			return 0;
		}
	}
	return -1;
};


function BaseStemmer$find_among_b$LBaseStemmer$ALAmong$I($this, v, v_size) {
	var i;
	var j;
	var c;
	var lb;
	var common_i;
	var common_j;
	var first_key_inspected;
	var k;
	var diff;
	var common;
	var w;
	var i2;
	var res;
	i = 0;
	j = v_size;
	c = $this.cursor;
	lb = $this.limit_backward;
	common_i = 0;
	common_j = 0;
	first_key_inspected = false;
	while (true) {
		k = i + (j - i >> 1);
		diff = 0;
		common = (common_i < common_j ? common_i : common_j);
		w = v[k];
		for (i2 = w.s_size - 1 - common; i2 >= 0; i2--) {
			if (c - common === lb) {
				diff = -1;
				break;
			}
			diff = $this.current.charCodeAt(c - 1 - common) - w.s.charCodeAt(i2);
			if (diff !== 0) {
				break;
			}
			common++;
		}
		if (diff < 0) {
			j = k;
			common_j = common;
		} else {
			i = k;
			common_i = common;
		}
		if (j - i <= 1) {
			if (i > 0) {
				break;
			}
			if (j === i) {
				break;
			}
			if (first_key_inspected) {
				break;
			}
			first_key_inspected = true;
		}
	}
	while (true) {
		w = v[i];
		if (common_i >= w.s_size) {
			$this.cursor = (c - w.s_size | 0);
			if (w.method == null) {
				return w.result;
			}
			res = w.method($this);
			$this.cursor = (c - w.s_size | 0);
			if (res) {
				return w.result;
			}
		}
		i = w.substring_i;
		if (i < 0) {
			return 0;
		}
	}
	return -1;
};

BaseStemmer.find_among_b$LBaseStemmer$ALAmong$I = BaseStemmer$find_among_b$LBaseStemmer$ALAmong$I;

BaseStemmer.prototype.replace_s$IIS = function (c_bra, c_ket, s) {
	var adjustment;
	adjustment = ((s.length - (((c_ket - c_bra) | 0))) | 0);
	this.current = this.current.slice(0, c_bra) + s + this.current.slice(c_ket);
	this.limit = (this.limit + adjustment) | 0;
	if (this.cursor >= c_ket) {
		this.cursor = (this.cursor + adjustment) | 0;
	} else if (this.cursor > c_bra) {
		this.cursor = c_bra;
	}
	return (adjustment | 0);
};


function BaseStemmer$replace_s$LBaseStemmer$IIS($this, c_bra, c_ket, s) {
	var adjustment;
	adjustment = ((s.length - (((c_ket - c_bra) | 0))) | 0);
	$this.current = $this.current.slice(0, c_bra) + s + $this.current.slice(c_ket);
	$this.limit = ($this.limit + adjustment) | 0;
	if ($this.cursor >= c_ket) {
		$this.cursor = ($this.cursor + adjustment) | 0;
	} else if ($this.cursor > c_bra) {
		$this.cursor = c_bra;
	}
	return (adjustment | 0);
};

BaseStemmer.replace_s$LBaseStemmer$IIS = BaseStemmer$replace_s$LBaseStemmer$IIS;

BaseStemmer.prototype.slice_check$ = function () {
	var bra$0;
	var ket$0;
	var limit$0;
	return ((bra$0 = this.bra) < 0 || bra$0 > (ket$0 = this.ket) || ket$0 > (limit$0 = this.limit) || limit$0 > this.current.length ? false : true);
};


function BaseStemmer$slice_check$LBaseStemmer$($this) {
	var bra$0;
	var ket$0;
	var limit$0;
	return ((bra$0 = $this.bra) < 0 || bra$0 > (ket$0 = $this.ket) || ket$0 > (limit$0 = $this.limit) || limit$0 > $this.current.length ? false : true);
};

BaseStemmer.slice_check$LBaseStemmer$ = BaseStemmer$slice_check$LBaseStemmer$;

BaseStemmer.prototype.slice_from$S = function (s) {
	var result;
	var bra$0;
	var ket$0;
	var limit$0;
	result = false;
	if ((bra$0 = this.bra) < 0 || bra$0 > (ket$0 = this.ket) || ket$0 > (limit$0 = this.limit) || limit$0 > this.current.length ? false : true) {
		BaseStemmer$replace_s$LBaseStemmer$IIS(this, this.bra, this.ket, s);
		result = true;
	}
	return result;
};


function BaseStemmer$slice_from$LBaseStemmer$S($this, s) {
	var result;
	var bra$0;
	var ket$0;
	var limit$0;
	result = false;
	if ((bra$0 = $this.bra) < 0 || bra$0 > (ket$0 = $this.ket) || ket$0 > (limit$0 = $this.limit) || limit$0 > $this.current.length ? false : true) {
		BaseStemmer$replace_s$LBaseStemmer$IIS($this, $this.bra, $this.ket, s);
		result = true;
	}
	return result;
};

BaseStemmer.slice_from$LBaseStemmer$S = BaseStemmer$slice_from$LBaseStemmer$S;

BaseStemmer.prototype.slice_del$ = function () {
	return BaseStemmer$slice_from$LBaseStemmer$S(this, "");
};


function BaseStemmer$slice_del$LBaseStemmer$($this) {
	return BaseStemmer$slice_from$LBaseStemmer$S($this, "");
};

BaseStemmer.slice_del$LBaseStemmer$ = BaseStemmer$slice_del$LBaseStemmer$;

BaseStemmer.prototype.insert$IIS = function (c_bra, c_ket, s) {
	var adjustment;
	adjustment = BaseStemmer$replace_s$LBaseStemmer$IIS(this, c_bra, c_ket, s);
	if (c_bra <= this.bra) {
		this.bra = (this.bra + adjustment) | 0;
	}
	if (c_bra <= this.ket) {
		this.ket = (this.ket + adjustment) | 0;
	}
};


function BaseStemmer$insert$LBaseStemmer$IIS($this, c_bra, c_ket, s) {
	var adjustment;
	adjustment = BaseStemmer$replace_s$LBaseStemmer$IIS($this, c_bra, c_ket, s);
	if (c_bra <= $this.bra) {
		$this.bra = ($this.bra + adjustment) | 0;
	}
	if (c_bra <= $this.ket) {
		$this.ket = ($this.ket + adjustment) | 0;
	}
};

BaseStemmer.insert$LBaseStemmer$IIS = BaseStemmer$insert$LBaseStemmer$IIS;

BaseStemmer.prototype.slice_to$S = function (s) {
	var result;
	var bra$0;
	var ket$0;
	var limit$0;
	result = '';
	if ((bra$0 = this.bra) < 0 || bra$0 > (ket$0 = this.ket) || ket$0 > (limit$0 = this.limit) || limit$0 > this.current.length ? false : true) {
		result = this.current.slice(this.bra, this.ket);
	}
	return result;
};


function BaseStemmer$slice_to$LBaseStemmer$S($this, s) {
	var result;
	var bra$0;
	var ket$0;
	var limit$0;
	result = '';
	if ((bra$0 = $this.bra) < 0 || bra$0 > (ket$0 = $this.ket) || ket$0 > (limit$0 = $this.limit) || limit$0 > $this.current.length ? false : true) {
		result = $this.current.slice($this.bra, $this.ket);
	}
	return result;
};

BaseStemmer.slice_to$LBaseStemmer$S = BaseStemmer$slice_to$LBaseStemmer$S;

BaseStemmer.prototype.assign_to$S = function (s) {
	return this.current.slice(0, this.limit);
};


function BaseStemmer$assign_to$LBaseStemmer$S($this, s) {
	return $this.current.slice(0, $this.limit);
};

BaseStemmer.assign_to$LBaseStemmer$S = BaseStemmer$assign_to$LBaseStemmer$S;

BaseStemmer.prototype.stem$ = function () {
	return false;
};


BaseStemmer.prototype.stemWord$S = function (word) {
	var result;
	var current$0;
	var cursor$0;
	var limit$0;
	result = this.cache['.' + word];
	if (result == null) {
		current$0 = this.current = word;
		cursor$0 = this.cursor = 0;
		limit$0 = this.limit = current$0.length;
		this.limit_backward = 0;
		this.bra = cursor$0;
		this.ket = limit$0;
		this.stem$();
		result = this.current;
		this.cache['.' + word] = result;
	}
	return result;
};

BaseStemmer.prototype.stemWord = BaseStemmer.prototype.stemWord$S;

BaseStemmer.prototype.stemWords$AS = function (words) {
	var results;
	var i;
	var word;
	var result;
	var current$0;
	var cursor$0;
	var limit$0;
	results = [  ];
	for (i = 0; i < words.length; i++) {
		word = words[i];
		result = this.cache['.' + word];
		if (result == null) {
			current$0 = this.current = word;
			cursor$0 = this.cursor = 0;
			limit$0 = this.limit = current$0.length;
			this.limit_backward = 0;
			this.bra = cursor$0;
			this.ket = limit$0;
			this.stem$();
			result = this.current;
			this.cache['.' + word] = result;
		}
		results.push(result);
	}
	return results;
};

BaseStemmer.prototype.stemWords = BaseStemmer.prototype.stemWords$AS;

function GermanStemmer() {
	BaseStemmer.call(this);
	this.I_x = 0;
	this.I_p2 = 0;
	this.I_p1 = 0;
};

$__jsx_extend([GermanStemmer], BaseStemmer);
GermanStemmer.prototype.copy_from$LGermanStemmer$ = function (other) {
	this.I_x = other.I_x;
	this.I_p2 = other.I_p2;
	this.I_p1 = other.I_p1;
	BaseStemmer$copy_from$LBaseStemmer$LBaseStemmer$(this, other);
};

GermanStemmer.prototype.copy_from = GermanStemmer.prototype.copy_from$LGermanStemmer$;

GermanStemmer.prototype.r_prelude$ = function () {
	var v_1;
	var v_2;
	var v_3;
	var v_4;
	var v_5;
	var v_6;
	var lab1;
	var lab2;
	var lab3;
	var lab5;
	var lab7;
	var lab8;
	var lab9;
	var cursor$0;
	var cursor$1;
	var $__jsx_postinc_t;
	v_1 = this.cursor;
replab0:
	while (true) {
		v_2 = this.cursor;
		lab1 = true;
	lab1:
		while (lab1 === true) {
			lab1 = false;
			lab2 = true;
		lab2:
			while (lab2 === true) {
				lab2 = false;
				v_3 = this.cursor;
				lab3 = true;
			lab3:
				while (lab3 === true) {
					lab3 = false;
					this.bra = this.cursor;
					if (! BaseStemmer$eq_s$LBaseStemmer$IS(this, 1, "\u00DF")) {
						break lab3;
					}
					this.ket = this.cursor;
					if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "ss")) {
						return false;
					}
					break lab2;
				}
				cursor$0 = this.cursor = v_3;
				if (cursor$0 >= this.limit) {
					break lab1;
				}
				($__jsx_postinc_t = this.cursor, this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
			}
			continue replab0;
		}
		this.cursor = v_2;
		break replab0;
	}
	this.cursor = v_1;
replab4:
	while (true) {
		v_4 = this.cursor;
		lab5 = true;
	lab5:
		while (lab5 === true) {
			lab5 = false;
		golab6:
			while (true) {
				v_5 = this.cursor;
				lab7 = true;
			lab7:
				while (lab7 === true) {
					lab7 = false;
					if (! BaseStemmer$in_grouping$LBaseStemmer$AIII(this, GermanStemmer.g_v, 97, 252)) {
						break lab7;
					}
					this.bra = this.cursor;
					lab8 = true;
				lab8:
					while (lab8 === true) {
						lab8 = false;
						v_6 = this.cursor;
						lab9 = true;
					lab9:
						while (lab9 === true) {
							lab9 = false;
							if (! BaseStemmer$eq_s$LBaseStemmer$IS(this, 1, "u")) {
								break lab9;
							}
							this.ket = this.cursor;
							if (! BaseStemmer$in_grouping$LBaseStemmer$AIII(this, GermanStemmer.g_v, 97, 252)) {
								break lab9;
							}
							if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "U")) {
								return false;
							}
							break lab8;
						}
						this.cursor = v_6;
						if (! BaseStemmer$eq_s$LBaseStemmer$IS(this, 1, "y")) {
							break lab7;
						}
						this.ket = this.cursor;
						if (! BaseStemmer$in_grouping$LBaseStemmer$AIII(this, GermanStemmer.g_v, 97, 252)) {
							break lab7;
						}
						if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "Y")) {
							return false;
						}
					}
					this.cursor = v_5;
					break golab6;
				}
				cursor$1 = this.cursor = v_5;
				if (cursor$1 >= this.limit) {
					break lab5;
				}
				($__jsx_postinc_t = this.cursor, this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
			}
			continue replab4;
		}
		this.cursor = v_4;
		break replab4;
	}
	return true;
};

GermanStemmer.prototype.r_prelude = GermanStemmer.prototype.r_prelude$;

function GermanStemmer$r_prelude$LGermanStemmer$($this) {
	var v_1;
	var v_2;
	var v_3;
	var v_4;
	var v_5;
	var v_6;
	var lab1;
	var lab2;
	var lab3;
	var lab5;
	var lab7;
	var lab8;
	var lab9;
	var cursor$0;
	var cursor$1;
	var $__jsx_postinc_t;
	v_1 = $this.cursor;
replab0:
	while (true) {
		v_2 = $this.cursor;
		lab1 = true;
	lab1:
		while (lab1 === true) {
			lab1 = false;
			lab2 = true;
		lab2:
			while (lab2 === true) {
				lab2 = false;
				v_3 = $this.cursor;
				lab3 = true;
			lab3:
				while (lab3 === true) {
					lab3 = false;
					$this.bra = $this.cursor;
					if (! BaseStemmer$eq_s$LBaseStemmer$IS($this, 1, "\u00DF")) {
						break lab3;
					}
					$this.ket = $this.cursor;
					if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "ss")) {
						return false;
					}
					break lab2;
				}
				cursor$0 = $this.cursor = v_3;
				if (cursor$0 >= $this.limit) {
					break lab1;
				}
				($__jsx_postinc_t = $this.cursor, $this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
			}
			continue replab0;
		}
		$this.cursor = v_2;
		break replab0;
	}
	$this.cursor = v_1;
replab4:
	while (true) {
		v_4 = $this.cursor;
		lab5 = true;
	lab5:
		while (lab5 === true) {
			lab5 = false;
		golab6:
			while (true) {
				v_5 = $this.cursor;
				lab7 = true;
			lab7:
				while (lab7 === true) {
					lab7 = false;
					if (! BaseStemmer$in_grouping$LBaseStemmer$AIII($this, GermanStemmer.g_v, 97, 252)) {
						break lab7;
					}
					$this.bra = $this.cursor;
					lab8 = true;
				lab8:
					while (lab8 === true) {
						lab8 = false;
						v_6 = $this.cursor;
						lab9 = true;
					lab9:
						while (lab9 === true) {
							lab9 = false;
							if (! BaseStemmer$eq_s$LBaseStemmer$IS($this, 1, "u")) {
								break lab9;
							}
							$this.ket = $this.cursor;
							if (! BaseStemmer$in_grouping$LBaseStemmer$AIII($this, GermanStemmer.g_v, 97, 252)) {
								break lab9;
							}
							if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "U")) {
								return false;
							}
							break lab8;
						}
						$this.cursor = v_6;
						if (! BaseStemmer$eq_s$LBaseStemmer$IS($this, 1, "y")) {
							break lab7;
						}
						$this.ket = $this.cursor;
						if (! BaseStemmer$in_grouping$LBaseStemmer$AIII($this, GermanStemmer.g_v, 97, 252)) {
							break lab7;
						}
						if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "Y")) {
							return false;
						}
					}
					$this.cursor = v_5;
					break golab6;
				}
				cursor$1 = $this.cursor = v_5;
				if (cursor$1 >= $this.limit) {
					break lab5;
				}
				($__jsx_postinc_t = $this.cursor, $this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
			}
			continue replab4;
		}
		$this.cursor = v_4;
		break replab4;
	}
	return true;
};

GermanStemmer.r_prelude$LGermanStemmer$ = GermanStemmer$r_prelude$LGermanStemmer$;

GermanStemmer.prototype.r_mark_regions$ = function () {
	var v_1;
	var c;
	var lab1;
	var lab3;
	var lab4;
	var lab6;
	var lab8;
	var limit$0;
	var cursor$0;
	var cursor$1;
	var $__jsx_postinc_t;
	this.I_p1 = limit$0 = this.limit;
	this.I_p2 = limit$0;
	v_1 = cursor$0 = this.cursor;
	c = (cursor$0 + 3 | 0);
	if (0 > c || c > limit$0) {
		return false;
	}
	cursor$1 = this.cursor = c;
	this.I_x = cursor$1;
	this.cursor = v_1;
golab0:
	while (true) {
		lab1 = true;
	lab1:
		while (lab1 === true) {
			lab1 = false;
			if (! BaseStemmer$in_grouping$LBaseStemmer$AIII(this, GermanStemmer.g_v, 97, 252)) {
				break lab1;
			}
			break golab0;
		}
		if (this.cursor >= this.limit) {
			return false;
		}
		($__jsx_postinc_t = this.cursor, this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
	}
golab2:
	while (true) {
		lab3 = true;
	lab3:
		while (lab3 === true) {
			lab3 = false;
			if (! BaseStemmer$out_grouping$LBaseStemmer$AIII(this, GermanStemmer.g_v, 97, 252)) {
				break lab3;
			}
			break golab2;
		}
		if (this.cursor >= this.limit) {
			return false;
		}
		($__jsx_postinc_t = this.cursor, this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
	}
	this.I_p1 = this.cursor;
	lab4 = true;
lab4:
	while (lab4 === true) {
		lab4 = false;
		if (! (this.I_p1 < this.I_x)) {
			break lab4;
		}
		this.I_p1 = this.I_x;
	}
golab5:
	while (true) {
		lab6 = true;
	lab6:
		while (lab6 === true) {
			lab6 = false;
			if (! BaseStemmer$in_grouping$LBaseStemmer$AIII(this, GermanStemmer.g_v, 97, 252)) {
				break lab6;
			}
			break golab5;
		}
		if (this.cursor >= this.limit) {
			return false;
		}
		($__jsx_postinc_t = this.cursor, this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
	}
golab7:
	while (true) {
		lab8 = true;
	lab8:
		while (lab8 === true) {
			lab8 = false;
			if (! BaseStemmer$out_grouping$LBaseStemmer$AIII(this, GermanStemmer.g_v, 97, 252)) {
				break lab8;
			}
			break golab7;
		}
		if (this.cursor >= this.limit) {
			return false;
		}
		($__jsx_postinc_t = this.cursor, this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
	}
	this.I_p2 = this.cursor;
	return true;
};

GermanStemmer.prototype.r_mark_regions = GermanStemmer.prototype.r_mark_regions$;

function GermanStemmer$r_mark_regions$LGermanStemmer$($this) {
	var v_1;
	var c;
	var lab1;
	var lab3;
	var lab4;
	var lab6;
	var lab8;
	var limit$0;
	var cursor$0;
	var cursor$1;
	var $__jsx_postinc_t;
	$this.I_p1 = limit$0 = $this.limit;
	$this.I_p2 = limit$0;
	v_1 = cursor$0 = $this.cursor;
	c = (cursor$0 + 3 | 0);
	if (0 > c || c > limit$0) {
		return false;
	}
	cursor$1 = $this.cursor = c;
	$this.I_x = cursor$1;
	$this.cursor = v_1;
golab0:
	while (true) {
		lab1 = true;
	lab1:
		while (lab1 === true) {
			lab1 = false;
			if (! BaseStemmer$in_grouping$LBaseStemmer$AIII($this, GermanStemmer.g_v, 97, 252)) {
				break lab1;
			}
			break golab0;
		}
		if ($this.cursor >= $this.limit) {
			return false;
		}
		($__jsx_postinc_t = $this.cursor, $this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
	}
golab2:
	while (true) {
		lab3 = true;
	lab3:
		while (lab3 === true) {
			lab3 = false;
			if (! BaseStemmer$out_grouping$LBaseStemmer$AIII($this, GermanStemmer.g_v, 97, 252)) {
				break lab3;
			}
			break golab2;
		}
		if ($this.cursor >= $this.limit) {
			return false;
		}
		($__jsx_postinc_t = $this.cursor, $this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
	}
	$this.I_p1 = $this.cursor;
	lab4 = true;
lab4:
	while (lab4 === true) {
		lab4 = false;
		if (! ($this.I_p1 < $this.I_x)) {
			break lab4;
		}
		$this.I_p1 = $this.I_x;
	}
golab5:
	while (true) {
		lab6 = true;
	lab6:
		while (lab6 === true) {
			lab6 = false;
			if (! BaseStemmer$in_grouping$LBaseStemmer$AIII($this, GermanStemmer.g_v, 97, 252)) {
				break lab6;
			}
			break golab5;
		}
		if ($this.cursor >= $this.limit) {
			return false;
		}
		($__jsx_postinc_t = $this.cursor, $this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
	}
golab7:
	while (true) {
		lab8 = true;
	lab8:
		while (lab8 === true) {
			lab8 = false;
			if (! BaseStemmer$out_grouping$LBaseStemmer$AIII($this, GermanStemmer.g_v, 97, 252)) {
				break lab8;
			}
			break golab7;
		}
		if ($this.cursor >= $this.limit) {
			return false;
		}
		($__jsx_postinc_t = $this.cursor, $this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
	}
	$this.I_p2 = $this.cursor;
	return true;
};

GermanStemmer.r_mark_regions$LGermanStemmer$ = GermanStemmer$r_mark_regions$LGermanStemmer$;

GermanStemmer.prototype.r_postlude$ = function () {
	var among_var;
	var v_1;
	var lab1;
	var $__jsx_postinc_t;
replab0:
	while (true) {
		v_1 = this.cursor;
		lab1 = true;
	lab1:
		while (lab1 === true) {
			lab1 = false;
			this.bra = this.cursor;
			among_var = BaseStemmer$find_among$LBaseStemmer$ALAmong$I(this, GermanStemmer.a_0, 6);
			if (among_var === 0) {
				break lab1;
			}
			this.ket = this.cursor;
			switch (among_var) {
			case 0:
				break lab1;
			case 1:
				if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "y")) {
					return false;
				}
				break;
			case 2:
				if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "u")) {
					return false;
				}
				break;
			case 3:
				if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "a")) {
					return false;
				}
				break;
			case 4:
				if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "o")) {
					return false;
				}
				break;
			case 5:
				if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "u")) {
					return false;
				}
				break;
			case 6:
				if (this.cursor >= this.limit) {
					break lab1;
				}
				($__jsx_postinc_t = this.cursor, this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
				break;
			}
			continue replab0;
		}
		this.cursor = v_1;
		break replab0;
	}
	return true;
};

GermanStemmer.prototype.r_postlude = GermanStemmer.prototype.r_postlude$;

function GermanStemmer$r_postlude$LGermanStemmer$($this) {
	var among_var;
	var v_1;
	var lab1;
	var $__jsx_postinc_t;
replab0:
	while (true) {
		v_1 = $this.cursor;
		lab1 = true;
	lab1:
		while (lab1 === true) {
			lab1 = false;
			$this.bra = $this.cursor;
			among_var = BaseStemmer$find_among$LBaseStemmer$ALAmong$I($this, GermanStemmer.a_0, 6);
			if (among_var === 0) {
				break lab1;
			}
			$this.ket = $this.cursor;
			switch (among_var) {
			case 0:
				break lab1;
			case 1:
				if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "y")) {
					return false;
				}
				break;
			case 2:
				if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "u")) {
					return false;
				}
				break;
			case 3:
				if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "a")) {
					return false;
				}
				break;
			case 4:
				if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "o")) {
					return false;
				}
				break;
			case 5:
				if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "u")) {
					return false;
				}
				break;
			case 6:
				if ($this.cursor >= $this.limit) {
					break lab1;
				}
				($__jsx_postinc_t = $this.cursor, $this.cursor = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
				break;
			}
			continue replab0;
		}
		$this.cursor = v_1;
		break replab0;
	}
	return true;
};

GermanStemmer.r_postlude$LGermanStemmer$ = GermanStemmer$r_postlude$LGermanStemmer$;

GermanStemmer.prototype.r_R1$ = function () {
	return (! (this.I_p1 <= this.cursor) ? false : true);
};

GermanStemmer.prototype.r_R1 = GermanStemmer.prototype.r_R1$;

function GermanStemmer$r_R1$LGermanStemmer$($this) {
	return (! ($this.I_p1 <= $this.cursor) ? false : true);
};

GermanStemmer.r_R1$LGermanStemmer$ = GermanStemmer$r_R1$LGermanStemmer$;

GermanStemmer.prototype.r_R2$ = function () {
	return (! (this.I_p2 <= this.cursor) ? false : true);
};

GermanStemmer.prototype.r_R2 = GermanStemmer.prototype.r_R2$;

function GermanStemmer$r_R2$LGermanStemmer$($this) {
	return (! ($this.I_p2 <= $this.cursor) ? false : true);
};

GermanStemmer.r_R2$LGermanStemmer$ = GermanStemmer$r_R2$LGermanStemmer$;

GermanStemmer.prototype.r_standard_suffix$ = function () {
	var among_var;
	var v_1;
	var v_2;
	var v_3;
	var v_4;
	var v_5;
	var v_6;
	var v_7;
	var v_8;
	var v_9;
	var v_10;
	var lab0;
	var lab1;
	var lab2;
	var c;
	var lab3;
	var lab4;
	var lab5;
	var lab6;
	var lab7;
	var lab8;
	var lab9;
	var lab10;
	var cursor$0;
	var cursor$1;
	var limit$0;
	var cursor$2;
	var cursor$3;
	var cursor$4;
	var cursor$5;
	var cursor$6;
	var cursor$7;
	var limit$1;
	var cursor$8;
	v_1 = ((this.limit - this.cursor) | 0);
	lab0 = true;
lab0:
	while (lab0 === true) {
		lab0 = false;
		this.ket = this.cursor;
		among_var = BaseStemmer$find_among_b$LBaseStemmer$ALAmong$I(this, GermanStemmer.a_1, 7);
		if (among_var === 0) {
			break lab0;
		}
		this.bra = cursor$0 = this.cursor;
		if (! (! (this.I_p1 <= cursor$0) ? false : true)) {
			break lab0;
		}
		switch (among_var) {
		case 0:
			break lab0;
		case 1:
			if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "")) {
				return false;
			}
			break;
		case 2:
			if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "")) {
				return false;
			}
			v_2 = ((this.limit - this.cursor) | 0);
			lab1 = true;
		lab1:
			while (lab1 === true) {
				lab1 = false;
				this.ket = this.cursor;
				if (! BaseStemmer$eq_s_b$LBaseStemmer$IS(this, 1, "s")) {
					this.cursor = ((this.limit - v_2) | 0);
					break lab1;
				}
				this.bra = this.cursor;
				if (! BaseStemmer$eq_s_b$LBaseStemmer$IS(this, 3, "nis")) {
					this.cursor = ((this.limit - v_2) | 0);
					break lab1;
				}
				if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "")) {
					return false;
				}
			}
			break;
		case 3:
			if (! BaseStemmer$in_grouping_b$LBaseStemmer$AIII(this, GermanStemmer.g_s_ending, 98, 116)) {
				break lab0;
			}
			if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "")) {
				return false;
			}
			break;
		}
	}
	cursor$2 = this.cursor = (((limit$0 = this.limit) - v_1) | 0);
	v_3 = ((limit$0 - cursor$2) | 0);
	lab2 = true;
lab2:
	while (lab2 === true) {
		lab2 = false;
		this.ket = this.cursor;
		among_var = BaseStemmer$find_among_b$LBaseStemmer$ALAmong$I(this, GermanStemmer.a_2, 4);
		if (among_var === 0) {
			break lab2;
		}
		this.bra = cursor$1 = this.cursor;
		if (! (! (this.I_p1 <= cursor$1) ? false : true)) {
			break lab2;
		}
		switch (among_var) {
		case 0:
			break lab2;
		case 1:
			if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "")) {
				return false;
			}
			break;
		case 2:
			if (! BaseStemmer$in_grouping_b$LBaseStemmer$AIII(this, GermanStemmer.g_st_ending, 98, 116)) {
				break lab2;
			}
			c = (this.cursor - 3 | 0);
			if (this.limit_backward > c || c > this.limit) {
				break lab2;
			}
			this.cursor = c;
			if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "")) {
				return false;
			}
			break;
		}
	}
	cursor$8 = this.cursor = (((limit$1 = this.limit) - v_3) | 0);
	v_4 = ((limit$1 - cursor$8) | 0);
	lab3 = true;
lab3:
	while (lab3 === true) {
		lab3 = false;
		this.ket = this.cursor;
		among_var = BaseStemmer$find_among_b$LBaseStemmer$ALAmong$I(this, GermanStemmer.a_4, 8);
		if (among_var === 0) {
			break lab3;
		}
		this.bra = cursor$3 = this.cursor;
		if (! (! (this.I_p2 <= cursor$3) ? false : true)) {
			break lab3;
		}
		switch (among_var) {
		case 0:
			break lab3;
		case 1:
			if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "")) {
				return false;
			}
			v_5 = ((this.limit - this.cursor) | 0);
			lab4 = true;
		lab4:
			while (lab4 === true) {
				lab4 = false;
				this.ket = this.cursor;
				if (! BaseStemmer$eq_s_b$LBaseStemmer$IS(this, 2, "ig")) {
					this.cursor = ((this.limit - v_5) | 0);
					break lab4;
				}
				this.bra = cursor$4 = this.cursor;
				v_6 = ((this.limit - cursor$4) | 0);
				lab5 = true;
			lab5:
				while (lab5 === true) {
					lab5 = false;
					if (! BaseStemmer$eq_s_b$LBaseStemmer$IS(this, 1, "e")) {
						break lab5;
					}
					this.cursor = ((this.limit - v_5) | 0);
					break lab4;
				}
				cursor$5 = this.cursor = ((this.limit - v_6) | 0);
				if (! (! (this.I_p2 <= cursor$5) ? false : true)) {
					this.cursor = ((this.limit - v_5) | 0);
					break lab4;
				}
				if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "")) {
					return false;
				}
			}
			break;
		case 2:
			v_7 = ((this.limit - this.cursor) | 0);
			lab6 = true;
		lab6:
			while (lab6 === true) {
				lab6 = false;
				if (! BaseStemmer$eq_s_b$LBaseStemmer$IS(this, 1, "e")) {
					break lab6;
				}
				break lab3;
			}
			this.cursor = ((this.limit - v_7) | 0);
			if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "")) {
				return false;
			}
			break;
		case 3:
			if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "")) {
				return false;
			}
			v_8 = ((this.limit - this.cursor) | 0);
			lab7 = true;
		lab7:
			while (lab7 === true) {
				lab7 = false;
				this.ket = this.cursor;
				lab8 = true;
			lab8:
				while (lab8 === true) {
					lab8 = false;
					v_9 = ((this.limit - this.cursor) | 0);
					lab9 = true;
				lab9:
					while (lab9 === true) {
						lab9 = false;
						if (! BaseStemmer$eq_s_b$LBaseStemmer$IS(this, 2, "er")) {
							break lab9;
						}
						break lab8;
					}
					this.cursor = ((this.limit - v_9) | 0);
					if (! BaseStemmer$eq_s_b$LBaseStemmer$IS(this, 2, "en")) {
						this.cursor = ((this.limit - v_8) | 0);
						break lab7;
					}
				}
				this.bra = cursor$6 = this.cursor;
				if (! (! (this.I_p1 <= cursor$6) ? false : true)) {
					this.cursor = ((this.limit - v_8) | 0);
					break lab7;
				}
				if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "")) {
					return false;
				}
			}
			break;
		case 4:
			if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "")) {
				return false;
			}
			v_10 = ((this.limit - this.cursor) | 0);
			lab10 = true;
		lab10:
			while (lab10 === true) {
				lab10 = false;
				this.ket = this.cursor;
				among_var = BaseStemmer$find_among_b$LBaseStemmer$ALAmong$I(this, GermanStemmer.a_3, 2);
				if (among_var === 0) {
					this.cursor = ((this.limit - v_10) | 0);
					break lab10;
				}
				this.bra = cursor$7 = this.cursor;
				if (! (! (this.I_p2 <= cursor$7) ? false : true)) {
					this.cursor = ((this.limit - v_10) | 0);
					break lab10;
				}
				switch (among_var) {
				case 0:
					this.cursor = ((this.limit - v_10) | 0);
					break lab10;
				case 1:
					if (! BaseStemmer$slice_from$LBaseStemmer$S(this, "")) {
						return false;
					}
					break;
				}
			}
			break;
		}
	}
	this.cursor = ((this.limit - v_4) | 0);
	return true;
};

GermanStemmer.prototype.r_standard_suffix = GermanStemmer.prototype.r_standard_suffix$;

function GermanStemmer$r_standard_suffix$LGermanStemmer$($this) {
	var among_var;
	var v_1;
	var v_2;
	var v_3;
	var v_4;
	var v_5;
	var v_6;
	var v_7;
	var v_8;
	var v_9;
	var v_10;
	var lab0;
	var lab1;
	var lab2;
	var c;
	var lab3;
	var lab4;
	var lab5;
	var lab6;
	var lab7;
	var lab8;
	var lab9;
	var lab10;
	var cursor$0;
	var cursor$1;
	var limit$0;
	var cursor$2;
	var cursor$3;
	var cursor$4;
	var cursor$5;
	var cursor$6;
	var cursor$7;
	var limit$1;
	var cursor$8;
	v_1 = (($this.limit - $this.cursor) | 0);
	lab0 = true;
lab0:
	while (lab0 === true) {
		lab0 = false;
		$this.ket = $this.cursor;
		among_var = BaseStemmer$find_among_b$LBaseStemmer$ALAmong$I($this, GermanStemmer.a_1, 7);
		if (among_var === 0) {
			break lab0;
		}
		$this.bra = cursor$0 = $this.cursor;
		if (! (! ($this.I_p1 <= cursor$0) ? false : true)) {
			break lab0;
		}
		switch (among_var) {
		case 0:
			break lab0;
		case 1:
			if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "")) {
				return false;
			}
			break;
		case 2:
			if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "")) {
				return false;
			}
			v_2 = (($this.limit - $this.cursor) | 0);
			lab1 = true;
		lab1:
			while (lab1 === true) {
				lab1 = false;
				$this.ket = $this.cursor;
				if (! BaseStemmer$eq_s_b$LBaseStemmer$IS($this, 1, "s")) {
					$this.cursor = (($this.limit - v_2) | 0);
					break lab1;
				}
				$this.bra = $this.cursor;
				if (! BaseStemmer$eq_s_b$LBaseStemmer$IS($this, 3, "nis")) {
					$this.cursor = (($this.limit - v_2) | 0);
					break lab1;
				}
				if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "")) {
					return false;
				}
			}
			break;
		case 3:
			if (! BaseStemmer$in_grouping_b$LBaseStemmer$AIII($this, GermanStemmer.g_s_ending, 98, 116)) {
				break lab0;
			}
			if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "")) {
				return false;
			}
			break;
		}
	}
	cursor$2 = $this.cursor = (((limit$0 = $this.limit) - v_1) | 0);
	v_3 = ((limit$0 - cursor$2) | 0);
	lab2 = true;
lab2:
	while (lab2 === true) {
		lab2 = false;
		$this.ket = $this.cursor;
		among_var = BaseStemmer$find_among_b$LBaseStemmer$ALAmong$I($this, GermanStemmer.a_2, 4);
		if (among_var === 0) {
			break lab2;
		}
		$this.bra = cursor$1 = $this.cursor;
		if (! (! ($this.I_p1 <= cursor$1) ? false : true)) {
			break lab2;
		}
		switch (among_var) {
		case 0:
			break lab2;
		case 1:
			if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "")) {
				return false;
			}
			break;
		case 2:
			if (! BaseStemmer$in_grouping_b$LBaseStemmer$AIII($this, GermanStemmer.g_st_ending, 98, 116)) {
				break lab2;
			}
			c = ($this.cursor - 3 | 0);
			if ($this.limit_backward > c || c > $this.limit) {
				break lab2;
			}
			$this.cursor = c;
			if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "")) {
				return false;
			}
			break;
		}
	}
	cursor$8 = $this.cursor = (((limit$1 = $this.limit) - v_3) | 0);
	v_4 = ((limit$1 - cursor$8) | 0);
	lab3 = true;
lab3:
	while (lab3 === true) {
		lab3 = false;
		$this.ket = $this.cursor;
		among_var = BaseStemmer$find_among_b$LBaseStemmer$ALAmong$I($this, GermanStemmer.a_4, 8);
		if (among_var === 0) {
			break lab3;
		}
		$this.bra = cursor$3 = $this.cursor;
		if (! (! ($this.I_p2 <= cursor$3) ? false : true)) {
			break lab3;
		}
		switch (among_var) {
		case 0:
			break lab3;
		case 1:
			if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "")) {
				return false;
			}
			v_5 = (($this.limit - $this.cursor) | 0);
			lab4 = true;
		lab4:
			while (lab4 === true) {
				lab4 = false;
				$this.ket = $this.cursor;
				if (! BaseStemmer$eq_s_b$LBaseStemmer$IS($this, 2, "ig")) {
					$this.cursor = (($this.limit - v_5) | 0);
					break lab4;
				}
				$this.bra = cursor$4 = $this.cursor;
				v_6 = (($this.limit - cursor$4) | 0);
				lab5 = true;
			lab5:
				while (lab5 === true) {
					lab5 = false;
					if (! BaseStemmer$eq_s_b$LBaseStemmer$IS($this, 1, "e")) {
						break lab5;
					}
					$this.cursor = (($this.limit - v_5) | 0);
					break lab4;
				}
				cursor$5 = $this.cursor = (($this.limit - v_6) | 0);
				if (! (! ($this.I_p2 <= cursor$5) ? false : true)) {
					$this.cursor = (($this.limit - v_5) | 0);
					break lab4;
				}
				if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "")) {
					return false;
				}
			}
			break;
		case 2:
			v_7 = (($this.limit - $this.cursor) | 0);
			lab6 = true;
		lab6:
			while (lab6 === true) {
				lab6 = false;
				if (! BaseStemmer$eq_s_b$LBaseStemmer$IS($this, 1, "e")) {
					break lab6;
				}
				break lab3;
			}
			$this.cursor = (($this.limit - v_7) | 0);
			if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "")) {
				return false;
			}
			break;
		case 3:
			if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "")) {
				return false;
			}
			v_8 = (($this.limit - $this.cursor) | 0);
			lab7 = true;
		lab7:
			while (lab7 === true) {
				lab7 = false;
				$this.ket = $this.cursor;
				lab8 = true;
			lab8:
				while (lab8 === true) {
					lab8 = false;
					v_9 = (($this.limit - $this.cursor) | 0);
					lab9 = true;
				lab9:
					while (lab9 === true) {
						lab9 = false;
						if (! BaseStemmer$eq_s_b$LBaseStemmer$IS($this, 2, "er")) {
							break lab9;
						}
						break lab8;
					}
					$this.cursor = (($this.limit - v_9) | 0);
					if (! BaseStemmer$eq_s_b$LBaseStemmer$IS($this, 2, "en")) {
						$this.cursor = (($this.limit - v_8) | 0);
						break lab7;
					}
				}
				$this.bra = cursor$6 = $this.cursor;
				if (! (! ($this.I_p1 <= cursor$6) ? false : true)) {
					$this.cursor = (($this.limit - v_8) | 0);
					break lab7;
				}
				if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "")) {
					return false;
				}
			}
			break;
		case 4:
			if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "")) {
				return false;
			}
			v_10 = (($this.limit - $this.cursor) | 0);
			lab10 = true;
		lab10:
			while (lab10 === true) {
				lab10 = false;
				$this.ket = $this.cursor;
				among_var = BaseStemmer$find_among_b$LBaseStemmer$ALAmong$I($this, GermanStemmer.a_3, 2);
				if (among_var === 0) {
					$this.cursor = (($this.limit - v_10) | 0);
					break lab10;
				}
				$this.bra = cursor$7 = $this.cursor;
				if (! (! ($this.I_p2 <= cursor$7) ? false : true)) {
					$this.cursor = (($this.limit - v_10) | 0);
					break lab10;
				}
				switch (among_var) {
				case 0:
					$this.cursor = (($this.limit - v_10) | 0);
					break lab10;
				case 1:
					if (! BaseStemmer$slice_from$LBaseStemmer$S($this, "")) {
						return false;
					}
					break;
				}
			}
			break;
		}
	}
	$this.cursor = (($this.limit - v_4) | 0);
	return true;
};

GermanStemmer.r_standard_suffix$LGermanStemmer$ = GermanStemmer$r_standard_suffix$LGermanStemmer$;

GermanStemmer.prototype.stem$ = function () {
	var v_1;
	var v_2;
	var v_4;
	var lab0;
	var lab1;
	var lab2;
	var lab3;
	var cursor$0;
	var cursor$1;
	var cursor$2;
	v_1 = this.cursor;
	lab0 = true;
lab0:
	while (lab0 === true) {
		lab0 = false;
		if (! GermanStemmer$r_prelude$LGermanStemmer$(this)) {
			break lab0;
		}
	}
	cursor$0 = this.cursor = v_1;
	v_2 = cursor$0;
	lab1 = true;
lab1:
	while (lab1 === true) {
		lab1 = false;
		if (! GermanStemmer$r_mark_regions$LGermanStemmer$(this)) {
			break lab1;
		}
	}
	cursor$1 = this.cursor = v_2;
	this.limit_backward = cursor$1;
	this.cursor = this.limit;
	lab2 = true;
lab2:
	while (lab2 === true) {
		lab2 = false;
		if (! GermanStemmer$r_standard_suffix$LGermanStemmer$(this)) {
			break lab2;
		}
	}
	cursor$2 = this.cursor = this.limit_backward;
	v_4 = cursor$2;
	lab3 = true;
lab3:
	while (lab3 === true) {
		lab3 = false;
		if (! GermanStemmer$r_postlude$LGermanStemmer$(this)) {
			break lab3;
		}
	}
	this.cursor = v_4;
	return true;
};

GermanStemmer.prototype.stem = GermanStemmer.prototype.stem$;

GermanStemmer.prototype.equals$X = function (o) {
	return o instanceof GermanStemmer;
};

GermanStemmer.prototype.equals = GermanStemmer.prototype.equals$X;

function GermanStemmer$equals$LGermanStemmer$X($this, o) {
	return o instanceof GermanStemmer;
};

GermanStemmer.equals$LGermanStemmer$X = GermanStemmer$equals$LGermanStemmer$X;

GermanStemmer.prototype.hashCode$ = function () {
	var classname;
	var hash;
	var i;
	var char;
	classname = "GermanStemmer";
	hash = 0;
	for (i = 0; i < classname.length; i++) {
		char = classname.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash = hash & hash;
	}
	return (hash | 0);
};

GermanStemmer.prototype.hashCode = GermanStemmer.prototype.hashCode$;

function GermanStemmer$hashCode$LGermanStemmer$($this) {
	var classname;
	var hash;
	var i;
	var char;
	classname = "GermanStemmer";
	hash = 0;
	for (i = 0; i < classname.length; i++) {
		char = classname.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash = hash & hash;
	}
	return (hash | 0);
};

GermanStemmer.hashCode$LGermanStemmer$ = GermanStemmer$hashCode$LGermanStemmer$;

GermanStemmer.serialVersionUID = 1;
$__jsx_lazy_init(GermanStemmer, "methodObject", function () {
	return new GermanStemmer();
});
$__jsx_lazy_init(GermanStemmer, "a_0", function () {
	return [ new Among("", -1, 6), new Among("U", 0, 2), new Among("Y", 0, 1), new Among("\u00E4", 0, 3), new Among("\u00F6", 0, 4), new Among("\u00FC", 0, 5) ];
});
$__jsx_lazy_init(GermanStemmer, "a_1", function () {
	return [ new Among("e", -1, 2), new Among("em", -1, 1), new Among("en", -1, 2), new Among("ern", -1, 1), new Among("er", -1, 1), new Among("s", -1, 3), new Among("es", 5, 2) ];
});
$__jsx_lazy_init(GermanStemmer, "a_2", function () {
	return [ new Among("en", -1, 1), new Among("er", -1, 1), new Among("st", -1, 2), new Among("est", 2, 1) ];
});
$__jsx_lazy_init(GermanStemmer, "a_3", function () {
	return [ new Among("ig", -1, 1), new Among("lich", -1, 1) ];
});
$__jsx_lazy_init(GermanStemmer, "a_4", function () {
	return [ new Among("end", -1, 1), new Among("ig", -1, 2), new Among("ung", -1, 1), new Among("lich", -1, 3), new Among("isch", -1, 2), new Among("ik", -1, 2), new Among("heit", -1, 3), new Among("keit", -1, 4) ];
});
GermanStemmer.g_v = [ 17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32, 8 ];
GermanStemmer.g_s_ending = [ 117, 30, 5 ];
GermanStemmer.g_st_ending = [ 117, 30, 4 ];

var $__jsx_classMap = {
	"src/among.jsx": {
		Among: Among,
		Among$SII: Among,
		Among$SIIF$LBaseStemmer$B$LBaseStemmer$: Among$0
	},
	"src/stemmer.jsx": {
		Stemmer: Stemmer,
		Stemmer$: Stemmer
	},
	"src/base-stemmer.jsx": {
		BaseStemmer: BaseStemmer,
		BaseStemmer$: BaseStemmer
	},
	"src/german-stemmer.jsx": {
		GermanStemmer: GermanStemmer,
		GermanStemmer$: GermanStemmer
	}
};


})(JSX);

var Among = JSX.require("src/among.jsx").Among;
var Among$SII = JSX.require("src/among.jsx").Among$SII;
var Stemmer = JSX.require("src/stemmer.jsx").Stemmer;
var BaseStemmer = JSX.require("src/base-stemmer.jsx").BaseStemmer;
var GermanStemmer = JSX.require("src/german-stemmer.jsx").GermanStemmer;
