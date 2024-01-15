"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var pokemonService = require('../services/pokemonService');
var pdfkit = require('pdfkit');
var axios = require('axios');
function getAllPokemons(req, res, allPokemons) {
    return __awaiter(this, void 0, void 0, function () {
        var limit, page, search, pokemons, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    limit = parseInt(req.query.limit, 10) || 0;
                    page = parseInt(req.query.page, 10) || 0;
                    search = req.query.q || '';
                    return [4 /*yield*/, pokemonService.getAllPokemonsService(limit, page, search, allPokemons)];
                case 1:
                    pokemons = _a.sent();
                    res.json(pokemons);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    res.status(500).json({ error: error_1.message, });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getPokemonDetails(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var pokemonId, details, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    pokemonId = req.params.pokemonId;
                    return [4 /*yield*/, pokemonService.getPokemonDetailsService(pokemonId)];
                case 1:
                    details = _a.sent();
                    res.json(details);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    res.status(500).json({ error: error_2.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function generatePokemonPDF(url, res) {
    return __awaiter(this, void 0, void 0, function () {
        var pokemonData, pdf, imageBuffer, imageData, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, pokemonService.getPokemonDataByUrl(url)];
                case 1:
                    pokemonData = _a.sent();
                    pdf = new pdfkit();
                    if (!(pokemonData.sprites && pokemonData.sprites.front_default)) return [3 /*break*/, 3];
                    return [4 /*yield*/, axios.get(pokemonData.sprites.front_default, { responseType: 'arraybuffer' })];
                case 2:
                    imageBuffer = _a.sent();
                    imageData = Buffer.from(imageBuffer.data, 'binary');
                    pdf.image(imageData, { width: 100, height: 100 });
                    _a.label = 3;
                case 3:
                    // Add Pokémon details to the PDF in a structured format
                    pdf.font('Helvetica-Bold').fontSize(18).text("Pok\u00E9mon Details: ".concat(pokemonData.name), { align: 'center' });
                    pdf.moveDown(0.5); // Add some vertical spacing
                    pdf.font('Helvetica').fontSize(12).text("ID: ".concat(pokemonData.id));
                    pdf.text("Altura: ".concat(pokemonData.height));
                    pdf.text("Peso: ".concat(pokemonData.weight));
                    pdf.moveDown(0.5); // Add some vertical spacing
                    // Add types
                    pdf.font('Helvetica-Bold').text('Tipos:');
                    pdf.font('Helvetica').text(pokemonData.types.map(function (type) { return "  - ".concat(type.type.name); }).join('\n'));
                    pdf.moveDown(0.5); // Add some vertical spacing
                    // Add abilities
                    pdf.font('Helvetica-Bold').text('Habilidades:');
                    pdf.font('Helvetica').text(pokemonData.abilities.map(function (ability) { return "  - ".concat(ability.ability.name); }).join('\n'));
                    // Set headers for the response
                    res.setHeader('Content-Type', 'application/pdf');
                    res.setHeader('Content-Disposition', 'attachment; filename=pokemon.pdf');
                    // Pipe the PDF to the response stream
                    pdf.pipe(res);
                    pdf.end();
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _a.sent();
                    console.error(error_3);
                    res.status(500).send('Error al procesar la solicitud');
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
module.exports = { getAllPokemons: getAllPokemons, getPokemonDetails: getPokemonDetails, generatePokemonPDF: generatePokemonPDF };
