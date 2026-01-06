"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateActivoById = exports.getcountActivo = exports.getTotalActivos = exports.getTipoInventario = exports.getTipoActivo = exports.getActivosXUsuario = exports.getActivos = exports.getActivoById = exports.getActivoByCodTag = exports.deleteActivoById = exports.createNewActivo = void 0;
var _database = require("../database");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var cloudinary = require("../libs/cloudinary");
var getActivos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_database.querys.getAllActivos);
        case 6:
          result = _context.sent;
          res.json(result.recordset);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send(_context.t0.message);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getActivos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getActivos = getActivos;
var getcountActivo = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context2.sent;
          _context2.next = 6;
          return pool.request().query(_database.querys.getCountAllActive);
        case 6:
          result = _context2.sent;
          res.json(result.recordset);
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          res.status(500);
          res.send(_context2.t0.message);
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function getcountActivo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getcountActivo = getcountActivo;
var createNewActivo = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var image1, image2, image3, img, _img, _img2, pool, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          //const { EQC_serie, EQC_placa, EQC_EQUIP_id,EQC_MARCA_id,EQC_MAP_ciudad,EQC_MAP_provincia,EQC_MAP_address,EQC_USU_ing,
          //EQC_codTag,EQC_LOGO_id,EQC_nombreCliente,EQC_identificacionCliente,EQC_direccionCliente,EQC_NegocioCliente,
          //EQC_telefonoCliente,EQC_cambio,EQC_estadoEquipo,EQC_observacion,EQC_TI_id,EQC_USU_edit,EQC_UBIC_id,
          //EQC_provincia,EQC_cabezales, EQC_SubCanal, EQC_Grupocliente, EQC_Ubicacion} = req.body;
          // validating
          //if (EQC_serie == null || EQC_placa == null ||  EQC_EQUIP_id==null || EQC_USU_ing == null || EQC_codTag == null || EQC_LOGO_id == null) {
          //return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
          //}
          //try {
          //const pool = await getConnection();
          //const result = await pool
          //.request()
          //.input("EQC_serie", sql.VarChar, EQC_serie)
          //.input("EQC_placa", sql.VarChar, EQC_placa)
          //.input("EQC_EQUIP_id", sql.Decimal, EQC_EQUIP_id)
          //.input("EQC_MARCA_id", sql.Decimal, EQC_MARCA_id)
          //.input("EQC_MAP_ciudad", sql.VarChar, EQC_MAP_ciudad)
          //.input("EQC_MAP_provincia", sql.VarChar, EQC_MAP_provincia)
          //.input("EQC_MAP_address", sql.VarChar, EQC_MAP_address)
          //.input("EQC_USU_ing", sql.Decimal, EQC_USU_ing)
          //.input("EQC_USU_edit", sql.Decimal, EQC_USU_edit)
          //.input("EQC_codTag", sql.VarChar, EQC_codTag)
          //.input("EQC_LOGO_id", sql.Decimal(18,2), EQC_LOGO_id)
          //.input("EQC_nombreCliente", sql.VarChar, EQC_nombreCliente)
          //.input("EQC_identificacionCliente", sql.VarChar, EQC_identificacionCliente)
          //.input("EQC_direccionCliente", sql.VarChar, EQC_direccionCliente)
          //.input("EQC_NegocioCliente", sql.VarChar, EQC_NegocioCliente)
          //.input("EQC_telefonoCliente", sql.VarChar, EQC_telefonoCliente)
          //.input("EQC_cambio",sql.Decimal,EQC_cambio)
          //.input("EQC_estadoEquipo",sql.Decimal,EQC_estadoEquipo)
          //.input("EQC_observacion",sql.VarChar,EQC_observacion)
          //.input("EQC_TI_id", sql.Decimal, EQC_TI_id)
          //.input("EQC_UBIC_id",sql.Decimal,EQC_UBIC_id)
          //.input("EQC_provincia",sql.VarChar,EQC_provincia)
          //.input("EQC_cabezales", sql.Decimal, EQC_cabezales)
          //.input("EQC_SubCanal", sql.VarChar, EQC_SubCanal)
          //.input("EQC_Grupocliente", sql.VarChar, EQC_Grupocliente)
          //.input("EQC_Ubicacion", sql.VarChar, EQC_Ubicacion)
          //.query(querys.addNewActivo);
          //if(result.rowsAffected==1){
          //return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0});
          //}else{
          //return res.status(400).json({ status: "400", msg: "No se pudo registrar, consulte al administrador" ,token:0});
          //}
          //} catch (error) {
          //res.status(500);
          //console.log(error.message);
          //res.send(error.message);
          //}
          image1 = '', image2 = '', image3 = '';
          if (!(req.files.length > 0)) {
            _context3.next = 36;
            break;
          }
          if (!(req.files[0] != undefined)) {
            _context3.next = 7;
            break;
          }
          _context3.next = 5;
          return cloudinary.uploader.upload(req.files[0].path);
        case 5:
          img = _context3.sent;
          image1 = img.secure_url;
        case 7:
          if (!(req.files[1] != undefined)) {
            _context3.next = 12;
            break;
          }
          _context3.next = 10;
          return cloudinary.uploader.upload(req.files[1].path);
        case 10:
          _img = _context3.sent;
          image2 = _img.secure_url;
        case 12:
          if (!(req.files[2] != undefined)) {
            _context3.next = 17;
            break;
          }
          _context3.next = 15;
          return cloudinary.uploader.upload(req.files[2].path);
        case 15:
          _img2 = _context3.sent;
          image3 = _img2.secure_url;
        case 17:
          _context3.prev = 17;
          _context3.next = 20;
          return (0, _database.getConnection)();
        case 20:
          pool = _context3.sent;
          _context3.next = 23;
          return pool.request().input("EQC_serie", _database.sql.VarChar, req.body.EQC_serie).input("EQC_placa", _database.sql.VarChar, req.body.EQC_placa).input("EQC_EQUIP_id", _database.sql.Decimal, req.body.EQC_EQUIP_id).input("EQC_MARCA_id", _database.sql.Decimal, req.body.EQC_MARCA_id).input("EQC_MAP_ciudad", _database.sql.VarChar, req.body.EQC_MAP_ciudad).input("EQC_MAP_provincia", _database.sql.VarChar, req.body.EQC_MAP_provincia).input("EQC_MAP_address", _database.sql.VarChar, req.body.EQC_MAP_address).input("EQC_USU_ing", _database.sql.Decimal, req.body.EQC_USU_ing).input("EQC_USU_edit", _database.sql.Decimal, req.body.EQC_USU_edit).input("EQC_codTag", _database.sql.VarChar, req.body.EQC_codTag).input("EQC_LOGO_id", _database.sql.Decimal(18, 2), req.body.EQC_LOGO_id).input("EQC_nombreCliente", _database.sql.VarChar, req.body.EQC_nombreCliente).input("EQC_identificacionCliente", _database.sql.VarChar, req.body.EQC_identificacionCliente).input("EQC_direccionCliente", _database.sql.VarChar, req.body.EQC_direccionCliente).input("EQC_NegocioCliente", _database.sql.VarChar, req.body.EQC_NegocioCliente).input("EQC_telefonoCliente", _database.sql.VarChar, req.body.EQC_telefonoCliente).input("EQC_cambio", _database.sql.Decimal, req.body.EQC_cambio).input("EQC_estadoEquipo", _database.sql.Decimal, req.body.EQC_estadoEquipo).input("EQC_observacion", _database.sql.VarChar, req.body.EQC_observacion).input("EQC_TI_id", _database.sql.Decimal, req.body.EQC_TI_id).input("EQC_UBIC_id", _database.sql.Decimal, req.body.EQC_UBIC_id).input("EQC_provincia", _database.sql.VarChar, req.body.EQC_provincia).input("EQC_cabezales", _database.sql.Decimal, req.body.EQC_cabezales).input("EQC_SubCanal", _database.sql.VarChar, req.body.EQC_SubCanal).input("EQC_Grupocliente", _database.sql.VarChar, req.body.EQC_Grupocliente).input("EQC_Ubicacion", _database.sql.VarChar, req.body.EQC_Ubicacion).input("REQ_imagen1", _database.sql.VarChar, image1).input("REQ_imagen2", _database.sql.VarChar, image2).input("REQ_imagen3", _database.sql.VarChar, image3).query(_database.querys.addNewActivo);
        case 23:
          result = _context3.sent;
          if (!(result.rowsAffected == 1)) {
            _context3.next = 28;
            break;
          }
          return _context3.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Registro exitoso",
            token: 0
          }));
        case 28:
          return _context3.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo registrar, consulte al administrador",
            token: 0
          }));
        case 29:
          _context3.next = 36;
          break;
        case 31:
          _context3.prev = 31;
          _context3.t0 = _context3["catch"](17);
          res.status(500);
          console.log(_context3.t0.message);
          res.send(_context3.t0.message);
        case 36:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[17, 31]]);
  }));
  return function createNewActivo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.createNewActivo = createNewActivo;
var updateActivoById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body, EQC_serie, EQC_placa, EQC_EQUIP_id, EQC_MARCA_id, EQC_MAP_ciudad, EQC_MAP_provincia, EQC_MAP_address, EQC_USU_ing, EQC_codTag, EQC_LOGO_id, EQC_nombreCliente, EQC_identificacionCliente, EQC_direccionCliente, EQC_NegocioCliente, EQC_telefonoCliente, EQC_cambio, EQC_estadoEquipo, EQC_observacion, EQC_TI_id, EQC_USU_edit, EQC_UBIC_id, EQC_provincia, EQC_cabezales, EQC_SubCanal, EQC_Grupocliente, EQC_Ubicacion, pool, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body = req.body, EQC_serie = _req$body.EQC_serie, EQC_placa = _req$body.EQC_placa, EQC_EQUIP_id = _req$body.EQC_EQUIP_id, EQC_MARCA_id = _req$body.EQC_MARCA_id, EQC_MAP_ciudad = _req$body.EQC_MAP_ciudad, EQC_MAP_provincia = _req$body.EQC_MAP_provincia, EQC_MAP_address = _req$body.EQC_MAP_address, EQC_USU_ing = _req$body.EQC_USU_ing, EQC_codTag = _req$body.EQC_codTag, EQC_LOGO_id = _req$body.EQC_LOGO_id, EQC_nombreCliente = _req$body.EQC_nombreCliente, EQC_identificacionCliente = _req$body.EQC_identificacionCliente, EQC_direccionCliente = _req$body.EQC_direccionCliente, EQC_NegocioCliente = _req$body.EQC_NegocioCliente, EQC_telefonoCliente = _req$body.EQC_telefonoCliente, EQC_cambio = _req$body.EQC_cambio, EQC_estadoEquipo = _req$body.EQC_estadoEquipo, EQC_observacion = _req$body.EQC_observacion, EQC_TI_id = _req$body.EQC_TI_id, EQC_USU_edit = _req$body.EQC_USU_edit, EQC_UBIC_id = _req$body.EQC_UBIC_id, EQC_provincia = _req$body.EQC_provincia, EQC_cabezales = _req$body.EQC_cabezales, EQC_SubCanal = _req$body.EQC_SubCanal, EQC_Grupocliente = _req$body.EQC_Grupocliente, EQC_Ubicacion = _req$body.EQC_Ubicacion; // validating
          //if (EQC_serie == null || EQC_placa == null ||  EQC_EQUIP_id==null  || EQC_USU_edit == null || EQC_codTag == null || EQC_LOGO_id == null) {
          // return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
          //}
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context4.sent;
          _context4.next = 7;
          return pool.request().input("id", req.params.id).input("EQC_serie", _database.sql.VarChar, EQC_serie).input("EQC_placa", _database.sql.VarChar, EQC_placa).input("EQC_EQUIP_id", _database.sql.Decimal, EQC_EQUIP_id).input("EQC_MARCA_id", _database.sql.Decimal, EQC_MARCA_id).input("EQC_MAP_ciudad", _database.sql.VarChar, EQC_MAP_ciudad).input("EQC_MAP_provincia", _database.sql.VarChar, EQC_MAP_provincia).input("EQC_MAP_address", _database.sql.VarChar, EQC_MAP_address).input("EQC_USU_ing", _database.sql.Decimal, EQC_USU_ing).input("EQC_USU_edit", _database.sql.Decimal, EQC_USU_edit).input("EQC_codTag", _database.sql.VarChar, EQC_codTag).input("EQC_LOGO_id", _database.sql.Decimal(18, 2), EQC_LOGO_id).input("EQC_nombreCliente", _database.sql.VarChar, EQC_nombreCliente).input("EQC_identificacionCliente", _database.sql.VarChar, EQC_identificacionCliente).input("EQC_direccionCliente", _database.sql.VarChar, EQC_direccionCliente).input("EQC_NegocioCliente", _database.sql.VarChar, EQC_NegocioCliente).input("EQC_telefonoCliente", _database.sql.VarChar, EQC_telefonoCliente).input("EQC_cambio", _database.sql.Decimal, EQC_cambio).input("EQC_estadoEquipo", _database.sql.Decimal, EQC_estadoEquipo).input("EQC_observacion", _database.sql.VarChar, EQC_observacion).input("EQC_TI_id", _database.sql.Decimal, EQC_TI_id).input("EQC_UBIC_id", _database.sql.Decimal, EQC_UBIC_id).input("EQC_provincia", _database.sql.VarChar, EQC_provincia).input("EQC_cabezales", _database.sql.Decimal, EQC_cabezales).input("EQC_SubCanal", _database.sql.VarChar, EQC_SubCanal).input("EQC_Grupocliente", _database.sql.VarChar, EQC_Grupocliente).input("EQC_Ubicacion", _database.sql.VarChar, EQC_Ubicacion).query(_database.querys.updateActivoById);
        case 7:
          result = _context4.sent;
          if (!(result.rowsAffected == 1)) {
            _context4.next = 12;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            status: "ok",
            msg: "Actualizacion exitosa",
            token: 0
          }));
        case 12:
          return _context4.abrupt("return", res.status(400).json({
            status: "400",
            msg: "No se pudo actualizar, consulte al administrador",
            token: 0
          }));
        case 13:
          _context4.next = 19;
          break;
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](1);
          res.status(500);
          res.send(_context4.t0.message);
        case 19:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 15]]);
  }));
  return function updateActivoById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateActivoById = updateActivoById;
var getActivoById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context5.sent;
          _context5.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.getActivoById);
        case 6:
          result = _context5.sent;
          return _context5.abrupt("return", res.json(result.recordset[0]));
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          res.status(500);
          res.send(_context5.t0.message);
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function getActivoById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getActivoById = getActivoById;
var getActivoByCodTag = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context6.sent;
          _context6.next = 6;
          return pool.request().input("EQC_codTag", req.params.EQC_codTag).query(_database.querys.getActivoByTag);
        case 6:
          result = _context6.sent;
          return _context6.abrupt("return", res.json(result.recordset[0]));
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          res.status(500);
          res.send(_context6.t0.message);
        case 14:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return function getActivoByCodTag(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.getActivoByCodTag = getActivoByCodTag;
var deleteActivoById = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context7.sent;
          _context7.next = 6;
          return pool.request().input("id", req.params.id).query(_database.querys.deleteActivo);
        case 6:
          result = _context7.sent;
          if (!(result.rowsAffected[0] === 0)) {
            _context7.next = 9;
            break;
          }
          return _context7.abrupt("return", res.sendStatus(404));
        case 9:
          return _context7.abrupt("return", res.sendStatus(204));
        case 12:
          _context7.prev = 12;
          _context7.t0 = _context7["catch"](0);
          res.status(500);
          res.send(_context7.t0.message);
        case 16:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 12]]);
  }));
  return function deleteActivoById(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.deleteActivoById = deleteActivoById;
var getTotalActivos = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _database.getConnection)();
        case 2:
          pool = _context8.sent;
          _context8.next = 5;
          return pool.request().query(_database.querys.getTotalActivos);
        case 5:
          result = _context8.sent;
          //console.log(result);
          res.json(result.recordset[0][""]);
        case 7:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function getTotalActivos(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.getTotalActivos = getTotalActivos;
var getActivosXUsuario = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context9.sent;
          _context9.next = 6;
          return pool.request().input("idUsuario", req.params.idUsuario).query(_database.querys.getActivoByUsuario);
        case 6:
          result = _context9.sent;
          res.json(result.recordset);
          _context9.next = 14;
          break;
        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);
          res.status(500);
          res.send(_context9.t0.message);
        case 14:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 10]]);
  }));
  return function getActivosXUsuario(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
exports.getActivosXUsuario = getActivosXUsuario;
var getTipoInventario = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context10.sent;
          _context10.next = 6;
          return pool.request().query(_database.querys.getAllTipoInventario);
        case 6:
          result = _context10.sent;
          res.json(result.recordset);
          _context10.next = 14;
          break;
        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](0);
          res.status(500);
          res.send(_context10.t0.message);
        case 14:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 10]]);
  }));
  return function getTipoInventario(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
exports.getTipoInventario = getTipoInventario;
var getTipoActivo = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context11.sent;
          _context11.next = 6;
          return pool.request().query(_database.querys.getAllTipoActivo);
        case 6:
          result = _context11.sent;
          res.json(result.recordset);
          _context11.next = 14;
          break;
        case 10:
          _context11.prev = 10;
          _context11.t0 = _context11["catch"](0);
          res.status(500);
          res.send(_context11.t0.message);
        case 14:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 10]]);
  }));
  return function getTipoActivo(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
exports.getTipoActivo = getTipoActivo;