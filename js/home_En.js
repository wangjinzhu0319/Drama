/**
 * Created by Administrator on 2017/07/14.
 */
/**
 * Created by Administrator on 2017/07/14.
 */
$(document).ready(function(){
    $window = $(window);
    $height = $(window).height();
    //木马旋转效果定义变量
    priceboxslider = true;
    pricebox = $('.price-box');
    priceboxtop = pricebox.offset().top;
    //木马旋转
    function priceboxfun() {
        if (priceboxslider) {
            if ($window.scrollTop() > priceboxtop - $height / 3 * 2) {
                (function (e, t) {
                    var n = 0,
                        r = Array.prototype.slice,
                        i = e.cleanData;
                    e.cleanData = function (t) {
                        for (var n = 0, r; (r = t[n]) != null; n++) try {
                            e(r).triggerHandler('remove')
                        } catch (s) {
                        }
                        i(t)
                    },
                        e.widget = function (t, n, r) {
                            var i,
                                s,
                                o,
                                u,
                                a = t.split('.') [0];
                            t = t.split('.') [1],
                                i = a + '-' + t,
                            r || (r = n, n = e.Widget),
                                e.expr[':'][i.toLowerCase()] = function (t) {
                                    return !!e.data(t, i)
                                },
                                e[a] = e[a] || {
                                    },
                                s = e[a][t],
                                o = e[a][t] = function (e, t) {
                                    if (!this._createWidget) return new o(e, t);
                                    arguments.length && this._createWidget(e, t)
                                },
                                e.extend(o, s, {
                                    version: r.version,
                                    _proto: e.extend({
                                    }, r),
                                    _childConstructors: [
                                    ]
                                }),
                                u = new n,
                                u.options = e.widget.extend({
                                }, u.options),
                                e.each(r, function (t, i) {
                                    e.isFunction(i) && (r[t] = function () {
                                        var e = function () {
                                                return n.prototype[t].apply(this, arguments)
                                            },
                                            r = function (e) {
                                                return n.prototype[t].apply(this, e)
                                            };
                                        return function () {
                                            var t = this._super,
                                                n = this._superApply,
                                                s;
                                            return this._super = e,
                                                this._superApply = r,
                                                s = i.apply(this, arguments),
                                                this._super = t,
                                                this._superApply = n,
                                                s
                                        }
                                    }())
                                }),
                                o.prototype = e.widget.extend(u, {
                                    widgetEventPrefix: u.widgetEventPrefix || t
                                }, r, {
                                    constructor: o,
                                    namespace: a,
                                    widgetName: t,
                                    widgetBaseClass: i,
                                    widgetFullName: i
                                }),
                                s ? (e.each(s._childConstructors, function (t, n) {
                                    var r = n.prototype;
                                    e.widget(r.namespace + '.' + r.widgetName, o, n._proto)
                                }), delete s._childConstructors)  : n._childConstructors.push(o),
                                e.widget.bridge(t, o)
                        },
                        e.widget.extend = function (n) {
                            var i = r.call(arguments, 1),
                                s = 0,
                                o = i.length,
                                u,
                                a;
                            for (; s < o; s++) for (u in i[s]) a = i[s][u],
                            i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({
                            }, n[u], a)  : e.widget.extend({
                            }, a)  : n[u] = a);
                            return n
                        },
                        e.widget.bridge = function (n, i) {
                            var s = i.prototype.widgetFullName;
                            e.fn[n] = function (o) {
                                var u = typeof o == 'string',
                                    a = r.call(arguments, 1),
                                    f = this;
                                return o = !u && a.length ? e.widget.extend.apply(null, [
                                    o
                                ].concat(a))  : o,
                                    u ? this.each(function () {
                                        var r,
                                            i = e.data(this, s);
                                        if (!i) return e.error('cannot call methods on ' + n + ' prior to initialization; ' + 'attempted to call method \'' + o + '\'');
                                        if (!e.isFunction(i[o]) || o.charAt(0) === '_') return e.error('no such method \'' + o + '\' for ' + n + ' widget instance');
                                        r = i[o].apply(i, a);
                                        if (r !== i && r !== t) return f = r && r.jquery ? f.pushStack(r.get())  : r,
                                            !1
                                    })  : this.each(function () {
                                        var t = e.data(this, s);
                                        t ? t.option(o || {
                                            })._init()  : new i(o, this)
                                    }),
                                    f
                            }
                        },
                        e.Widget = function () {
                        },
                        e.Widget._childConstructors = [
                        ],
                        e.Widget.prototype = {
                            widgetName: 'widget',
                            widgetEventPrefix: '',
                            defaultElement: '<div>',
                            options: {
                                disabled: !1,
                                create: null
                            },
                            _createWidget: function (t, r) {
                                r = e(r || this.defaultElement || this) [0],
                                    this.element = e(r),
                                    this.uuid = n++,
                                    this.eventNamespace = '.' + this.widgetName + this.uuid,
                                    this.options = e.widget.extend({
                                    }, this.options, this._getCreateOptions(), t),
                                    this.bindings = e(),
                                    this.hoverable = e(),
                                    this.focusable = e(),
                                r !== this && (e.data(r, this.widgetName, this), e.data(r, this.widgetFullName, this), this._on(this.element, {
                                    remove: function (e) {
                                        e.target === r && this.destroy()
                                    }
                                }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
                                    this._create(),
                                    this._trigger('create', null, this._getCreateEventData()),
                                    this._init()
                            },
                            _getCreateOptions: e.noop,
                            _getCreateEventData: e.noop,
                            _create: e.noop,
                            _init: e.noop,
                            destroy: function () {
                                this._destroy(),
                                    this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
                                    this.widget().unbind(this.eventNamespace).removeAttr('aria-disabled').removeClass(this.widgetFullName + '-disabled ' + 'ui-state-disabled'),
                                    this.bindings.unbind(this.eventNamespace),
                                    this.hoverable.removeClass('ui-state-hover'),
                                    this.focusable.removeClass('ui-state-focus')
                            },
                            _destroy: e.noop,
                            widget: function () {
                                return this.element
                            },
                            option: function (n, r) {
                                var i = n,
                                    s,
                                    o,
                                    u;
                                if (arguments.length === 0) return e.widget.extend({
                                }, this.options);
                                if (typeof n == 'string') {
                                    i = {
                                    },
                                        s = n.split('.'),
                                        n = s.shift();
                                    if (s.length) {
                                        o = i[n] = e.widget.extend({
                                        }, this.options[n]);
                                        for (u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {
                                            },
                                            o = o[s[u]];
                                        n = s.pop();
                                        if (r === t) return o[n] === t ? null : o[n];
                                        o[n] = r
                                    } else {
                                        if (r === t) return this.options[n] === t ? null : this.options[n];
                                        i[n] = r
                                    }
                                }
                                return this._setOptions(i),
                                    this
                            },
                            _setOptions: function (e) {
                                var t;
                                for (t in e) this._setOption(t, e[t]);
                                return this
                            },
                            _setOption: function (e, t) {
                                return this.options[e] = t,
                                e === 'disabled' && (this.widget().toggleClass(this.widgetFullName + '-disabled ui-state-disabled', !!t).attr('aria-disabled', t), this.hoverable.removeClass('ui-state-hover'), this.focusable.removeClass('ui-state-focus')),
                                    this
                            },
                            enable: function () {
                                return this._setOption('disabled', !1)
                            },
                            disable: function () {
                                return this._setOption('disabled', !0)
                            },
                            _on: function (t, n) {
                                var r,
                                    i = this;
                                n ? (t = r = e(t), this.bindings = this.bindings.add(t))  : (n = t, t = this.element, r = this.widget()),
                                    e.each(n, function (n, s) {
                                        function o() {
                                            if (i.options.disabled === !0 || e(this).hasClass('ui-state-disabled')) return;
                                            return (typeof s == 'string' ? i[s] : s).apply(i, arguments)
                                        }
                                        typeof s != 'string' && (o.guid = s.guid = s.guid || o.guid || e.guid++);
                                        var u = n.match(/^(\w+)\s*(.*)$/),
                                            a = u[1] + i.eventNamespace,
                                            f = u[2];
                                        f ? r.delegate(f, a, o)  : t.bind(a, o)
                                    })
                            },
                            _off: function (e, t) {
                                t = (t || '').split(' ').join(this.eventNamespace + ' ') + this.eventNamespace,
                                    e.unbind(t).undelegate(t)
                            },
                            _delay: function (e, t) {
                                function n() {
                                    return (typeof e == 'string' ? r[e] : e).apply(r, arguments)
                                }
                                var r = this;
                                return setTimeout(n, t || 0)
                            },
                            _hoverable: function (t) {
                                this.hoverable = this.hoverable.add(t),
                                    this._on(t, {
                                        mouseenter: function (t) {
                                            e(t.currentTarget).addClass('ui-state-hover')
                                        },
                                        mouseleave: function (t) {
                                            e(t.currentTarget).removeClass('ui-state-hover')
                                        }
                                    })
                            },
                            _focusable: function (t) {
                                this.focusable = this.focusable.add(t),
                                    this._on(t, {
                                        focusin: function (t) {
                                            e(t.currentTarget).addClass('ui-state-focus')
                                        },
                                        focusout: function (t) {
                                            e(t.currentTarget).removeClass('ui-state-focus')
                                        }
                                    })
                            },
                            _trigger: function (t, n, r) {
                                var i,
                                    s,
                                    o = this.options[t];
                                r = r || {
                                    },
                                    n = e.Event(n),
                                    n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
                                    n.target = this.element[0],
                                    s = n.originalEvent;
                                if (s) for (i in s) i in n || (n[i] = s[i]);
                                return this.element.trigger(n, r),
                                    !(e.isFunction(o) && o.apply(this.element[0], [
                                        n
                                    ].concat(r)) === !1 || n.isDefaultPrevented())
                            }
                        },
                        e.each({
                            show: 'fadeIn',
                            hide: 'fadeOut'
                        }, function (t, n) {
                            e.Widget.prototype['_' + t] = function (r, i, s) {
                                typeof i == 'string' && (i = {
                                    effect: i
                                });
                                var o,
                                    u = i ? i === !0 || typeof i == 'number' ? n : i.effect || n : t;
                                i = i || {
                                    },
                                typeof i == 'number' && (i = {
                                    duration: i
                                }),
                                    o = !e.isEmptyObject(i),
                                    i.complete = s,
                                i.delay && r.delay(i.delay),
                                    o && e.effects && (e.effects.effect[u] || e.uiBackCompat !== !1 && e.effects[u]) ? r[t](i)  : u !== t && r[u] ? r[u](i.duration, i.easing, s)  : r.queue(function (n) {
                                        e(this) [t](),
                                        s && s.call(r[0]),
                                            n()
                                    })
                            }
                        }),
                    e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function () {
                        return e.metadata && e.metadata.get(this.element[0]) [this.widgetName]
                    })
                }) (jQuery);
                (function ($, undefined) {
                    'use strict';
                    var supportsCSS = !!((window.CSS && window.CSS.supports) || window.supportsCSS || false),
                        $perspective = false;
                    if (supportsCSS) {
                        if (CSS.supports('transform', 'perspective(1px)')) {
                            $perspective = true;
                        }
                    };
                    var sign = function (number) {
                            return number < 0 ? - 1 : 1
                        },
                        scl = function (number, fromMin, fromMax, toMin, toMax) {
                            return ((number - fromMin) * (toMax - toMin) / (fromMax - fromMin)) + toMin
                        },
                        wheelEvents = ('onwheel' in document) ? 'wheel' : 'mousewheel',
                        getWheel = function (event) {
                            if ('deltaY' in event.originalEvent) {
                                return 0 - event.originalEvent.deltaY
                            } else if ('wheelDelta' in event.originalEvent) {
                                return event.originalEvent.wheelDelta
                            }
                        };
                    $.widget('vanderlee.coverflow', {
                        options: {
                            animateComplete: undefined,
                            animateStep: undefined,
                            density: 1,
                            duration: 'normal',
                            easing: undefined,
                            index: 0,
                            innerAngle: - 75,
                            innerCss: undefined,
                            innerOffset: 100 / 3,
                            innerScale: 0.75,
                            outerAngle: - 30,
                            outerCss: undefined,
                            outerScale: 0.25,
                            selectedCss: undefined,
                            visible: 'density',
                            width: undefined,
                            change: undefined,
                            confirm: undefined,
                            select: undefined
                        },
                        _window_handler_resize: null,
                        _window_handler_keydown: null,
                        _create: function () {
                            var that = this,
                                covers = that._getCovers(),
                                images = covers.filter('img').add('img', covers).filter(function () {
                                    return !(this.complete || this.height > 0)
                                }),
                                maxHeight = covers.height() + 10,
                                height;
                            that.widgetEventPrefix = 'vanderlee-coverflow';
                            that.hovering = false;
                            that.pagesize = 1;
                            that.currentIndex = that.options.index;
                            that.element.height(maxHeight);
                            images.load(function () {
                                height = that._getCovers().height() + 10;
                                if (height > maxHeight) {
                                    maxHeight = height;
                                    that.element.height(maxHeight)
                                }
                            });
                            covers.hide();
                            that.element.on('mousedown tap', '> *', function (event) {
                                var index = that._getCovers().index(this);
                                if (index === that.currentIndex) {
                                    that._callback('confirm', event)
                                } else {
                                    that._setIndex(index, true)
                                }
                            });
                            that.element.on(wheelEvents, function (event) {
                                var delta = getWheel(event) > 0 ? 1 : - 1;
                                event.preventDefault();
                                that._setIndex(that.options.index - delta, true)
                            });
                            if ($.isFunction(that.element.swipe)) {
                                that.element.swipe({
                                    swipe: function (event, direction, distance, duration, fingerCount) {
                                        var count = Math.round((direction === 'left' ? 1 : - 1) * 1.25 * that.pagesize * distance / that.element.width());
                                        that._setIndex(that.options.index + count, true)
                                    }
                                })
                            }
                            that.element.hover(function () {
                                that.hovering = true
                            }, function () {
                                that.hovering = false
                            });
                            that._window_handler_resize = function () {
                                that.refresh()
                            };
                            that._window_handler_keydown = function (event) {
                                if (that.hovering) {
                                    switch (event.which) {
                                        case 36:
                                            event.preventDefault();
                                            that._setIndex(0, true);
                                            break;
                                        case 35:
                                            event.preventDefault();
                                            that._setIndex(that._getCovers().length - 1, true);
                                            break;
                                        case 38:
                                        case 37:
                                            event.preventDefault();
                                            that._setIndex(that.options.index - 1, true);
                                            break;
                                        case 40:
                                        case 39:
                                            event.preventDefault();
                                            that._setIndex(that.options.index + 1, true);
                                            break;
                                        case 33:
                                            event.preventDefault();
                                            that._setIndex(that.options.index - that.pagesize, true);
                                            break;
                                        case 34:
                                            event.preventDefault();
                                            that._setIndex(that.options.index + that.pagesize, true);
                                            break
                                    }
                                }
                            };
                            $(window).on('resize', that._window_handler_resize);
                            $(window).on('keydown', that._window_handler_keydown);
                            that._setIndex(that.options.index, false, true);
                            return that
                        },
                        _destroy: function () {
                            $(window).off('resize', this._window_handler_resize);
                            $(window).off('keydown', this._window_handler_keydown);
                            this.element.height('')
                        },
                        cover: function () {
                            return $(this._getCovers() [this.options.index])
                        },
                        _getCovers: function () {
                            return $('> *', this.element)
                        },
                        _setIndex: function (index, animate, initial) {
                            var that = this,
                                covers = that._getCovers();
                            index = Math.max(0, Math.min(index, covers.length - 1));
                            if (index !== that.options.index) {
                                covers.css('position', 'absolute');
                                this._frame(that.options.index);
                                if (animate === true || that.options.duration === 0) {
                                    that.options.index = Math.round(index);
                                    var duration = typeof that.options.duration === 'number' ? that.options.duration : jQuery.fx.speeds[that.options.duration] || jQuery.fx.speeds._default;
                                    this.refresh(duration, that.options.index)
                                } else {
                                    that.options.index = Math.round(index);
                                    that.refresh(0)
                                }
                            } else if (initial === true) {
                                that.refresh();
                                that._callback('select')
                            }
                        },
                        _callback: function (callback, event) {
                            this._trigger(callback, event, [
                                this._getCovers().get(this.currentIndex),
                                this.currentIndex
                            ])
                        },
                        index: function (index) {
                            if (index === undefined) {
                                return this.options.index
                            }
                            while (index < 0) {
                                index += this._getCovers().length
                            }
                            this._setIndex(index, true)
                        },
                        _frame: function (frame) {
                            frame = frame.toFixed(6);
                            var that = this,
                                covers = that._getCovers(),
                                count = covers.length,
                                parentWidth = that.element.innerWidth(),
                                coverWidth = that.options.width || covers.first().outerWidth(),
                                visible = that.options.visible === 'density' ? Math.round(parentWidth * that.options.density / coverWidth)  : $.isNumeric(that.options.visible) ? that.options.visible : count,
                                parentLeft = that.element.position().left - ((1 - that.options.outerScale) * coverWidth * 0.5),
                                space = (parentWidth - (that.options.outerScale * coverWidth)) * 0.5;
                            that.pagesize = visible;
                            covers.removeClass('current').each(function (index, cover) {
                                var $cover = $(cover),
                                    position = index - frame,
                                    offset = Math.min(Math.max( - 1, position / visible), 1),
                                    isMiddle = position == 0,
                                    zIndex = count - Math.abs(Math.round(position)),
                                    isVisible = Math.abs(position) <= visible,
                                    sin = Math.sin(offset * Math.PI * 0.5),
                                    cos = Math.cos(offset * Math.PI * 0.5),
                                    left = $perspective ? sign(sin) * scl(Math.abs(sin), 0, 1, that.options.innerOffset * that.options.density, space)  : sign(sin) * scl(Math.abs(sin), 0, 1, that.options.innerOffset * that.options.density / 2, space),
                                    scale = isVisible ? ($perspective ? scl(Math.abs(cos), 1, 0, that.options.innerScale, that.options.outerScale)  : scl(Math.abs(cos), 1, 0, that.options.innerScale / 5 * 7, that.options.outerScale))  : 0,
                                    angle = sign(sin) * scl(Math.abs(sin), 0, 1, that.options.innerAngle, that.options.outerAngle),
                                    css = isMiddle ? that.options.selectedCss || {
                                    }
                                        : ($.interpolate && that.options.outerCss && !$.isEmptyObject(that.options.outerCss) ? (isVisible ? $.interpolate(that.options.innerCss || {
                                        }, that.options.outerCss, Math.abs(sin))  : that.options.outerCss)  : {
                                    }),
                                    transform,
                                    transforms,
                                    scales,
                                    opacity;
                                if (Math.abs(position) < 1) {
                                    angle = 0 - (0 - angle) * Math.abs(position);
                                    scale = 1 - (1 - scale) * Math.abs(position);
                                    left = 0 - (0 - left) * Math.abs(position)
                                }
                                opacity = 1 - Math.abs(sin);
                                if ($perspective) {
                                    transform = 'scale(' + scale + ',' + scale + ') perspective(' + (parentWidth * 0.5) + 'px) rotateY(' + angle + 'deg) '
                                } else {
                                    transform = 'scale(' + scale + ',' + scale + ') skewX(' + sin * - 10 + 'deg)'
                                }
                                $cover[isMiddle ? 'addClass' : 'removeClass']('current');
                                $cover[isVisible ? 'show' : 'hide']();
                                $cover.css($.extend(css, {
                                    'left': parentLeft + space + left,
                                    'z-index': zIndex,
                                    '-webkit-transform': transform,
                                    '-moz-transform': transform,
                                    '-ms-transform': transform,
                                    '-o-transform': transform,
                                    'transform': transform,
                                    '-webkit-opacity': opacity,
                                    '-moz-opacity': opacity,
                                    '-ms-opacity': opacity,
                                    '-o-opacity': opacity,
                                    'opacity': opacity
                                }));
                                that._trigger('animateStep', null, [
                                    cover,
                                    offset,
                                    isVisible,
                                    isMiddle,
                                    sin,
                                    cos
                                ]);
                                if (frame == that.options.index) {
                                    that._trigger('animateComplete', null, [
                                        cover,
                                        offset,
                                        isVisible,
                                        isMiddle,
                                        sin,
                                        cos
                                    ])
                                }
                            })
                        },
                        refresh: function (duration, index) {
                            var that = this,
                                previous = that.currentIndex,
                                covers = that._getCovers(),
                                covercount = covers.length,
                                triggered = false;
                            covers.css('position', 'absolute');
                            that.element.stop().animate({
                                '__coverflow_frame': index || that.options.index
                            }, {
                                'easing': that.options.easing,
                                'duration': duration || 0,
                                'step': function (now, fx) {
                                    that._frame(now);
                                    that.currentIndex = Math.max(0, Math.min(Math.round(now), covercount - 1));
                                    if (previous !== that.currentIndex) {
                                        previous = that.currentIndex;
                                        that._callback('change');
                                        if (that.currentIndex === that.options.index) {
                                            triggered = true
                                        }
                                    }
                                },
                                'complete': function () {
                                    that.currentIndex = that.options.index;
                                    if (!triggered) {
                                        that._callback('change')
                                    }
                                    that._callback('select')
                                }
                            })
                        }
                    });
                }(jQuery));
                $('.coverflow').coverflow({
                    index: Math.floor($('.cover').attr('data-first')) || Math.floor($('.cover').length / 2),
                    density: 3,
                    innerOffset: 60,
                    innerScale: 0.5
                }).css('opacity', 1); pricebox.addClass('over'); priceboxslider = false;
            }
        }
    }
    priceboxfun();
    $window.scroll(function () {
        priceboxfun();
    });
});