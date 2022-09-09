const countries = [
    {
        "id": 1,
        "label": "Afeganistão",
        "initials": "AF",
        "value": "004"
    },
    {
        "id": 2,
        "label": "África do Sul",
        "initials": "ZA",
        "value": "710"
    },
    {
        "id": 3,
        "label": "Albânia",
        "initials": "AL",
        "value": "008"
    },
    {
        "id": 4,
        "label": "Alemanha",
        "initials": "DE",
        "value": "276"
    },
    {
        "id": 5,
        "label": "Andorra",
        "initials": "AD",
        "value": "020"
    },
    {
        "id": 6,
        "label": "Angola",
        "initials": "AO",
        "value": "024"
    },
    {
        "id": 7,
        "label": "Anguilla",
        "initials": "AI",
        "value": "660"
    },
    {
        "id": 8,
        "label": "Antártida",
        "initials": "AQ",
        "value": "010"
    },
    {
        "id": 9,
        "label": "Antígua e Barbuda",
        "initials": "AG",
        "value": "028"
    },
    {
        "id": 10,
        "label": "Antilhas Holandesas",
        "initials": "AN",
        "value": "530"
    },
    {
        "id": 11,
        "label": "Arábia Saudita",
        "initials": "SA",
        "value": "682"
    },
    {
        "id": 12,
        "label": "Argélia",
        "initials": "DZ",
        "value": "012"
    },
    {
        "id": 13,
        "label": "Argentina",
        "initials": "AR",
        "value": "032"
    },
    {
        "id": 14,
        "label": "Armênia",
        "initials": "AM",
        "value": "51"
    },
    {
        "id": 15,
        "label": "Aruba",
        "initials": "AW",
        "value": "533"
    },
    {
        "id": 16,
        "label": "Austrália",
        "initials": "AU",
        "value": "036"
    },
    {
        "id": 17,
        "label": "Áustria",
        "initials": "AT",
        "value": "040"
    },
    {
        "id": 18,
        "label": "Azerbaijão",
        "initials": "AZ  ",
        "value": "31"
    },
    {
        "id": 19,
        "label": "Bahamas",
        "initials": "BS",
        "value": "044"
    },
    {
        "id": 20,
        "label": "Bahrein",
        "initials": "BH",
        "value": "048"
    },
    {
        "id": 21,
        "label": "Bangladesh",
        "initials": "BD",
        "value": "050"
    },
    {
        "id": 22,
        "label": "Barbados",
        "initials": "BB",
        "value": "052"
    },
    {
        "id": 23,
        "label": "Belarus",
        "initials": "BY",
        "value": "112"
    },
    {
        "id": 24,
        "label": "Bélgica",
        "initials": "BE",
        "value": "056"
    },
    {
        "id": 25,
        "label": "Belize",
        "initials": "BZ",
        "value": "084"
    },
    {
        "id": 26,
        "label": "Benin",
        "initials": "BJ",
        "value": "204"
    },
    {
        "id": 27,
        "label": "Bermudas",
        "initials": "BM",
        "value": "060"
    },
    {
        "id": 28,
        "label": "Bolívia",
        "initials": "BO",
        "value": "068"
    },
    {
        "id": 29,
        "label": "Bósnia-Herzegóvina",
        "initials": "BA",
        "value": "070"
    },
    {
        "id": 30,
        "label": "Botsuana",
        "initials": "BW",
        "value": "072"
    },
    {
        "id": 31,
        "label": "Brasil",
        "initials": "BR",
        "value": "076"
    },
    {
        "id": 32,
        "label": "Brunei",
        "initials": "BN",
        "value": "096"
    },
    {
        "id": 33,
        "label": "Bulgária",
        "initials": "BG",
        "value": "100"
    },
    {
        "id": 34,
        "label": "Burkina Fasso",
        "initials": "BF",
        "value": "854"
    },
    {
        "id": 35,
        "label": "Burundi",
        "initials": "BI",
        "value": "108"
    },
    {
        "id": 36,
        "label": "Butão",
        "initials": "BT",
        "value": "064"
    },
    {
        "id": 37,
        "label": "Cabo Verde",
        "initials": "CV",
        "value": "132"
    },
    {
        "id": 38,
        "label": "Camarões",
        "initials": "CM",
        "value": "120"
    },
    {
        "id": 39,
        "label": "Camboja",
        "initials": "KH",
        "value": "116"
    },
    {
        "id": 40,
        "label": "Canadá",
        "initials": "CA",
        "value": "124"
    },
    {
        "id": 41,
        "label": "Cazaquistão",
        "initials": "KZ",
        "value": "398"
    },
    {
        "id": 42,
        "label": "Chade",
        "initials": "TD",
        "value": "148"
    },
    {
        "id": 43,
        "label": "Chile",
        "initials": "CL",
        "value": "152"
    },
    {
        "id": 44,
        "label": "China",
        "initials": "CN",
        "value": "156"
    },
    {
        "id": 45,
        "label": "Chipre",
        "initials": "CY",
        "value": "196"
    },
    {
        "id": 46,
        "label": "Cingapura",
        "initials": "SG",
        "value": "702"
    },
    {
        "id": 47,
        "label": "Colômbia",
        "initials": "CO",
        "value": "170"
    },
    {
        "id": 48,
        "label": "Congo",
        "initials": "CG",
        "value": "178"
    },
    {
        "id": 49,
        "label": "Coréia do Norte",
        "initials": "KP",
        "value": "408"
    },
    {
        "id": 50,
        "label": "Coréia do Sul",
        "initials": "KR",
        "value": "410"
    },
    {
        "id": 51,
        "label": "Costa do Marfim",
        "initials": "CI",
        "value": "384"
    },
    {
        "id": 52,
        "label": "Costa Rica",
        "initials": "CR",
        "value": "188"
    },
    {
        "id": 53,
        "label": "Croácia (Hrvatska)",
        "initials": "HR",
        "value": "191"
    },
    {
        "id": 54,
        "label": "Cuba",
        "initials": "CU",
        "value": "192"
    },
    {
        "id": 55,
        "label": "Dinamarca",
        "initials": "DK",
        "value": "208"
    },
    {
        "id": 56,
        "label": "Djibuti",
        "initials": "DJ",
        "value": "262"
    },
    {
        "id": 57,
        "label": "Dominica",
        "initials": "DM",
        "value": "212"
    },
    {
        "id": 58,
        "label": "Egito",
        "initials": "EG",
        "value": "818"
    },
    {
        "id": 59,
        "label": "El Salvador",
        "initials": "SV",
        "value": "222"
    },
    {
        "id": 60,
        "label": "Emirados Árabes Unidos",
        "initials": "AE",
        "value": "784"
    },
    {
        "id": 61,
        "label": "Equador",
        "initials": "EC",
        "value": "218"
    },
    {
        "id": 62,
        "label": "Eritréia",
        "initials": "ER",
        "value": "232"
    },
    {
        "id": 63,
        "label": "Eslováquia",
        "initials": "SK",
        "value": "703"
    },
    {
        "id": 64,
        "label": "Eslovênia",
        "initials": "SI",
        "value": "705"
    },
    {
        "id": 65,
        "label": "Espanha",
        "initials": "ES",
        "value": "724"
    },
    {
        "id": 66,
        "label": "Estados Unidos",
        "initials": "US",
        "value": "840"
    },
    {
        "id": 67,
        "label": "Estônia",
        "initials": "EE",
        "value": "233"
    },
    {
        "id": 68,
        "label": "Etiópia",
        "initials": "ET",
        "value": "231"
    },
    {
        "id": 69,
        "label": "Fiji",
        "initials": "FJ",
        "value": "242"
    },
    {
        "id": 70,
        "label": "Filipinas",
        "initials": "PH",
        "value": "608"
    },
    {
        "id": 71,
        "label": "Finlândia",
        "initials": "FI",
        "value": "246"
    },
    {
        "id": 72,
        "label": "França",
        "initials": "FR",
        "value": "250"
    },
    {
        "id": 73,
        "label": "Gabão",
        "initials": "GA",
        "value": "266"
    },
    {
        "id": 74,
        "label": "Gâmbia",
        "initials": "GM",
        "value": "270"
    },
    {
        "id": 75,
        "label": "Gana",
        "initials": "GH",
        "value": "288"
    },
    {
        "id": 76,
        "label": "Geórgia",
        "initials": "GE",
        "value": "268"
    },
    {
        "id": 77,
        "label": "Gibraltar",
        "initials": "GI",
        "value": "292"
    },
    {
        "id": 78,
        "label": "Grã-Bretanha (Reino Unido, UK)",
        "initials": "GB",
        "value": "826"
    },
    {
        "id": 79,
        "label": "Granada",
        "initials": "GD",
        "value": "308"
    },
    {
        "id": 80,
        "label": "Grécia",
        "initials": "GR",
        "value": "300"
    },
    {
        "id": 81,
        "label": "Groelândia",
        "initials": "GL",
        "value": "304"
    },
    {
        "id": 82,
        "label": "Guadalupe",
        "initials": "GP",
        "value": "312"
    },
    {
        "id": 83,
        "label": "Guam (Território dos Estados Unidos)",
        "initials": "GU",
        "value": "316"
    },
    {
        "id": 84,
        "label": "Guatemala",
        "initials": "GT",
        "value": "320"
    },
    {
        "id": 85,
        "label": "Guernsey",
        "initials": "G",
        "value": "832"
    },
    {
        "id": 86,
        "label": "Guiana",
        "initials": "GY",
        "value": "328"
    },
    {
        "id": 87,
        "label": "Guiana Francesa",
        "initials": "GF",
        "value": "254"
    },
    {
        "id": 88,
        "label": "Guiné",
        "initials": "GN",
        "value": "324"
    },
    {
        "id": 89,
        "label": "Guiné Equatorial",
        "initials": "GQ",
        "value": "226"
    },
    {
        "id": 90,
        "label": "Guiné-Bissau",
        "initials": "GW",
        "value": "624"
    },
    {
        "id": 91,
        "label": "Haiti",
        "initials": "HT",
        "value": "332"
    },
    {
        "id": 92,
        "label": "Holanda",
        "initials": "NL",
        "value": "528"
    },
    {
        "id": 93,
        "label": "Honduras",
        "initials": "HN",
        "value": "340"
    },
    {
        "id": 94,
        "label": "Hong Kong",
        "initials": "HK",
        "value": "344"
    },
    {
        "id": 95,
        "label": "Hungria",
        "initials": "HU",
        "value": "348"
    },
    {
        "id": 96,
        "label": "Iêmen",
        "initials": "YE",
        "value": "887"
    },
    {
        "id": 97,
        "label": "Ilha Bouvet (Território da Noruega)",
        "initials": "BV",
        "value": "074"
    },
    {
        "id": 98,
        "label": "Ilha do Homem",
        "initials": "IM",
        "value": "833"
    },
    {
        "id": 99,
        "label": "Ilha Natal",
        "initials": "CX",
        "value": "162"
    },
    {
        "id": 100,
        "label": "Ilha Pitcairn",
        "initials": "PN",
        "value": "612"
    },
    {
        "id": 101,
        "label": "Ilha Reunião",
        "initials": "RE",
        "value": "638"
    },
    {
        "id": 102,
        "label": "Ilhas Aland",
        "initials": "AX",
        "value": "248"
    },
    {
        "id": 103,
        "label": "Ilhas Cayman",
        "initials": "KY",
        "value": "136"
    },
    {
        "id": 104,
        "label": "Ilhas Cocos",
        "initials": "CC",
        "value": "166"
    },
    {
        "id": 105,
        "label": "Ilhas Comores",
        "initials": "KM",
        "value": "174"
    },
    {
        "id": 106,
        "label": "Ilhas Cook",
        "initials": "CK",
        "value": "184"
    },
    {
        "id": 107,
        "label": "Ilhas Faroes",
        "initials": "FO",
        "value": "234"
    },
    {
        "id": 108,
        "label": "Ilhas Falkland (Malvinas)",
        "initials": "FK",
        "value": "238"
    },
    {
        "id": 109,
        "label": "Ilhas Geórgia do Sul e Sandwich do Sul",
        "initials": "GS",
        "value": "239"
    },
    {
        "id": 110,
        "label": "Ilhas Heard e McDonald (Território da Austrália)",
        "initials": "HM",
        "value": "334"
    },
    {
        "id": 111,
        "label": "Ilhas Marianas do Norte",
        "initials": "MP",
        "value": "580"
    },
    {
        "id": 112,
        "label": "Ilhas Marshall",
        "initials": "MH",
        "value": "584"
    },
    {
        "id": 113,
        "label": "Ilhas Menores dos Estados Unidos",
        "initials": "UM",
        "value": "581"
    },
    {
        "id": 114,
        "label": "Ilhas Norfolk",
        "initials": "NF",
        "value": "574"
    },
    {
        "id": 115,
        "label": "Ilhas Seychelles",
        "initials": "SC",
        "value": "690"
    },
    {
        "id": 116,
        "label": "Ilhas Solomão",
        "initials": "SB",
        "value": "090"
    },
    {
        "id": 117,
        "label": "Ilhas Svalbard e Jan Mayen",
        "initials": "SJ",
        "value": "744"
    },
    {
        "id": 118,
        "label": "Ilhas Tokelau",
        "initials": "TK",
        "value": "772"
    },
    {
        "id": 119,
        "label": "Ilhas Turks e Caicos",
        "initials": "TC",
        "value": "796"
    },
    {
        "id": 120,
        "label": "Ilhas Virgens (Estados Unidos)",
        "initials": "VI",
        "value": "850"
    },
    {
        "id": 121,
        "label": "Ilhas Virgens (Inglaterra)",
        "initials": "VG",
        "value": "092"
    },
    {
        "id": 122,
        "label": "Ilhas Wallis e Futuna",
        "initials": "WF",
        "value": "876"
    },
    {
        "id": 123,
        "label": "índia",
        "initials": "IN",
        "value": "356"
    },
    {
        "id": 124,
        "label": "Indonésia",
        "initials": "ID",
        "value": "360"
    },
    {
        "id": 125,
        "label": "Irã",
        "initials": "IR",
        "value": "364"
    },
    {
        "id": 126,
        "label": "Iraque",
        "initials": "IQ",
        "value": "368"
    },
    {
        "id": 127,
        "label": "Irlanda",
        "initials": "IE",
        "value": "372"
    },
    {
        "id": 128,
        "label": "Islândia",
        "initials": "IS",
        "value": "352"
    },
    {
        "id": 129,
        "label": "Israel",
        "initials": "IL",
        "value": "376"
    },
    {
        "id": 130,
        "label": "Itália",
        "initials": "IT",
        "value": "380"
    },
    {
        "id": 131,
        "label": "Jamaica",
        "initials": "JM",
        "value": "388"
    },
    {
        "id": 132,
        "label": "Japão",
        "initials": "JP",
        "value": "392"
    },
    {
        "id": 133,
        "label": "Jersey",
        "initials": "JE",
        "value": "832"
    },
    {
        "id": 134,
        "label": "Jordânia",
        "initials": "JO",
        "value": "400"
    },
    {
        "id": 135,
        "label": "Kênia",
        "initials": "KE",
        "value": "404"
    },
    {
        "id": 136,
        "label": "Kiribati",
        "initials": "KI",
        "value": "296"
    },
    {
        "id": 137,
        "label": "Kuait",
        "initials": "KW",
        "value": "414"
    },
    {
        "id": 138,
        "label": "Laos",
        "initials": "LA",
        "value": "418"
    },
    {
        "id": 139,
        "label": "Látvia",
        "initials": "LV",
        "value": "428"
    },
    {
        "id": 140,
        "label": "Lesoto",
        "initials": "LS",
        "value": "426"
    },
    {
        "id": 141,
        "label": "Líbano",
        "initials": "LB",
        "value": "422"
    },
    {
        "id": 142,
        "label": "Libéria",
        "initials": "LR",
        "value": "430"
    },
    {
        "id": 143,
        "label": "Líbia",
        "initials": "LY",
        "value": "434"
    },
    {
        "id": 144,
        "label": "Liechtenstein",
        "initials": "LI",
        "value": "438"
    },
    {
        "id": 145,
        "label": "Lituânia",
        "initials": "LT",
        "value": "440"
    },
    {
        "id": 146,
        "label": "Luxemburgo",
        "initials": "LU",
        "value": "442"
    },
    {
        "id": 147,
        "label": "Macau",
        "initials": "MO",
        "value": "446"
    },
    {
        "id": 148,
        "label": "Macedônia (República Yugoslava)",
        "initials": "MK",
        "value": "807"
    },
    {
        "id": 149,
        "label": "Madagascar",
        "initials": "MG",
        "value": "450"
    },
    {
        "id": 150,
        "label": "Malásia",
        "initials": "MY",
        "value": "458"
    },
    {
        "id": 151,
        "label": "Malaui",
        "initials": "MW",
        "value": "454"
    },
    {
        "id": 152,
        "label": "Maldivas",
        "initials": "MV",
        "value": "462"
    },
    {
        "id": 153,
        "label": "Mali",
        "initials": "ML",
        "value": "466"
    },
    {
        "id": 154,
        "label": "Malta",
        "initials": "MT",
        "value": "470"
    },
    {
        "id": 155,
        "label": "Marrocos",
        "initials": "MA",
        "value": "504"
    },
    {
        "id": 156,
        "label": "Martinica",
        "initials": "MQ",
        "value": "474"
    },
    {
        "id": 157,
        "label": "Maurício",
        "initials": "MU",
        "value": "480"
    },
    {
        "id": 158,
        "label": "Mauritânia",
        "initials": "MR",
        "value": "478"
    },
    {
        "id": 159,
        "label": "Mayotte",
        "initials": "YT",
        "value": "175"
    },
    {
        "id": 160,
        "label": "México",
        "initials": "MX",
        "value": "484"
    },
    {
        "id": 161,
        "label": "Micronésia",
        "initials": "FM",
        "value": "583"
    },
    {
        "id": 162,
        "label": "Moçambique",
        "initials": "MZ",
        "value": "508"
    },
    {
        "id": 163,
        "label": "Moldova",
        "initials": "MD",
        "value": "498"
    },
    {
        "id": 164,
        "label": "Mônaco",
        "initials": "MC",
        "value": "492"
    },
    {
        "id": 165,
        "label": "Mongólia",
        "initials": "MN",
        "value": "496"
    },
    {
        "id": 166,
        "label": "Montenegro",
        "initials": "ME",
        "value": "499"
    },
    {
        "id": 167,
        "label": "Montserrat",
        "initials": "MS",
        "value": "500"
    },
    {
        "id": 168,
        "label": "Myanma",
        "initials": "MM",
        "value": "104"
    },
    {
        "id": 169,
        "label": "Namíbia",
        "initials": "NA",
        "value": "516"
    },
    {
        "id": 170,
        "label": "Nauru",
        "initials": "NR",
        "value": "520"
    },
    {
        "id": 171,
        "label": "Nepal",
        "initials": "NP",
        "value": "524"
    },
    {
        "id": 172,
        "label": "Nicarágua",
        "initials": "NI",
        "value": "558"
    },
    {
        "id": 173,
        "label": "Níger",
        "initials": "NE",
        "value": "562"
    },
    {
        "id": 174,
        "label": "Nigéria",
        "initials": "NG",
        "value": "566"
    },
    {
        "id": 175,
        "label": "Niue",
        "initials": "NU",
        "value": "570"
    },
    {
        "id": 176,
        "label": "Noruega",
        "initials": "NO",
        "value": "578"
    },
    {
        "id": 177,
        "label": "Nova Caledônia",
        "initials": "NC",
        "value": "540"
    },
    {
        "id": 178,
        "label": "Nova Zelândia",
        "initials": "NZ",
        "value": "554"
    },
    {
        "id": 179,
        "label": "Omã",
        "initials": "OM",
        "value": "512"
    },
    {
        "id": 180,
        "label": "Palau",
        "initials": "PW",
        "value": "585"
    },
    {
        "id": 181,
        "label": "Panamá",
        "initials": "PA",
        "value": "591"
    },
    {
        "id": 182,
        "label": "Papua-Nova Guiné",
        "initials": "PG",
        "value": "598"
    },
    {
        "id": 183,
        "label": "Paquistão",
        "initials": "PK",
        "value": "586"
    },
    {
        "id": 184,
        "label": "Paraguai",
        "initials": "PY",
        "value": "600"
    },
    {
        "id": 185,
        "label": "Peru",
        "initials": "PE",
        "value": "604"
    },
    {
        "id": 186,
        "label": "Polinésia Francesa",
        "initials": "PF",
        "value": "258"
    },
    {
        "id": 187,
        "label": "Polônia",
        "initials": "PL",
        "value": "616"
    },
    {
        "id": 188,
        "label": "Porto Rico",
        "initials": "PR",
        "value": "630"
    },
    {
        "id": 189,
        "label": "Portugal",
        "initials": "PT",
        "value": "620"
    },
    {
        "id": 190,
        "label": "Qatar",
        "initials": "QA",
        "value": "634"
    },
    {
        "id": 191,
        "label": "Quirguistão",
        "initials": "KG",
        "value": "417"
    },
    {
        "id": 192,
        "label": "República Centro-Africana",
        "initials": "CF",
        "value": "140"
    },
    {
        "id": 193,
        "label": "República Democrática do Congo",
        "initials": "CD",
        "value": "180"
    },
    {
        "id": 194,
        "label": "República Dominicana",
        "initials": "DO",
        "value": "214"
    },
    {
        "id": 195,
        "label": "República Tcheca",
        "initials": "CZ",
        "value": "203"
    },
    {
        "id": 196,
        "label": "Romênia",
        "initials": "RO",
        "value": "642"
    },
    {
        "id": 197,
        "label": "Ruanda",
        "initials": "RW",
        "value": "646"
    },
    {
        "id": 198,
        "label": "Rússia (antiga URSS) - Federação Russa",
        "initials": "RU",
        "value": "643"
    },
    {
        "id": 199,
        "label": "Saara Ocidental",
        "initials": "EH",
        "value": "732"
    },
    {
        "id": 200,
        "label": "Saint Vincente e Granadinas",
        "initials": "VC",
        "value": "670"
    },
    {
        "id": 201,
        "label": "Samoa Americana",
        "initials": "AS",
        "value": "016"
    },
    {
        "id": 202,
        "label": "Samoa Ocidental",
        "initials": "WS",
        "value": "882"
    },
    {
        "id": 203,
        "label": "San Marino",
        "initials": "SM",
        "value": "674"
    },
    {
        "id": 204,
        "label": "Santa Helena",
        "initials": "SH",
        "value": "654"
    },
    {
        "id": 205,
        "label": "Santa Lúcia",
        "initials": "LC",
        "value": "662"
    },
    {
        "id": 206,
        "label": "São Bartolomeu",
        "initials": "BL",
        "value": "652"
    },
    {
        "id": 207,
        "label": "São Cristóvão e Névis",
        "initials": "KN",
        "value": "659"
    },
    {
        "id": 208,
        "label": "São Martim",
        "initials": "MF",
        "value": "663"
    },
    {
        "id": 209,
        "label": "São Tomé e Príncipe",
        "initials": "ST",
        "value": "678"
    },
    {
        "id": 210,
        "label": "Senegal",
        "initials": "SN",
        "value": "686"
    },
    {
        "id": 211,
        "label": "Serra Leoa",
        "initials": "SL",
        "value": "694"
    },
    {
        "id": 212,
        "label": "Sérvia",
        "initials": "RS",
        "value": "688"
    },
    {
        "id": 213,
        "label": "Síria",
        "initials": "SY",
        "value": "760"
    },
    {
        "id": 214,
        "label": "Somália",
        "initials": "SO",
        "value": "706"
    },
    {
        "id": 215,
        "label": "Sri Lanka",
        "initials": "LK",
        "value": "144"
    },
    {
        "id": 216,
        "label": "St. Pierre and Miquelon",
        "initials": "PM",
        "value": "666"
    },
    {
        "id": 217,
        "label": "Suazilândia",
        "initials": "SZ",
        "value": "748"
    },
    {
        "id": 218,
        "label": "Sudão",
        "initials": "SD",
        "value": "736"
    },
    {
        "id": 219,
        "label": "Suécia",
        "initials": "SE",
        "value": "752"
    },
    {
        "id": 220,
        "label": "Suíça",
        "initials": "CH",
        "value": "756"
    },
    {
        "id": 221,
        "label": "Surilabel",
        "initials": "SR",
        "value": "740"
    },
    {
        "id": 222,
        "label": "Tadjiquistão",
        "initials": "TJ",
        "value": "762"
    },
    {
        "id": 223,
        "label": "Tailândia",
        "initials": "TH",
        "value": "764"
    },
    {
        "id": 224,
        "label": "Taiwan",
        "initials": "TW",
        "value": "158"
    },
    {
        "id": 225,
        "label": "Tanzânia",
        "initials": "TZ",
        "value": "834"
    },
    {
        "id": 226,
        "label": "Território Britânico do Oceano índico",
        "initials": "IO",
        "value": "086"
    },
    {
        "id": 227,
        "label": "Territórios do Sul da França",
        "initials": "TF",
        "value": "260"
    },
    {
        "id": 228,
        "label": "Territórios Palestinos Ocupados",
        "initials": "PS",
        "value": "275"
    },
    {
        "id": 229,
        "label": "Timor Leste",
        "initials": "TP",
        "value": "626"
    },
    {
        "id": 230,
        "label": "Togo",
        "initials": "TG",
        "value": "768"
    },
    {
        "id": 231,
        "label": "Tonga",
        "initials": "TO",
        "value": "776"
    },
    {
        "id": 232,
        "label": "Trinidad and Tobago",
        "initials": "TT",
        "value": "780"
    },
    {
        "id": 233,
        "label": "Tunísia",
        "initials": "TN",
        "value": "788"
    },
    {
        "id": 234,
        "label": "Turcomenistão",
        "initials": "TM",
        "value": "795"
    },
    {
        "id": 235,
        "label": "Turquia",
        "initials": "TR",
        "value": "792"
    },
    {
        "id": 236,
        "label": "Tuvalu",
        "initials": "TV",
        "value": "798"
    },
    {
        "id": 237,
        "label": "Ucrânia",
        "initials": "UA",
        "value": "804"
    },
    {
        "id": 238,
        "label": "Uganda",
        "initials": "UG",
        "value": "800"
    },
    {
        "id": 239,
        "label": "Uruguai",
        "initials": "UY",
        "value": "858"
    },
    {
        "id": 240,
        "label": "Uzbequistão",
        "initials": "UZ",
        "value": "860"
    },
    {
        "id": 241,
        "label": "Vanuatu",
        "initials": "VU",
        "value": "548"
    },
    {
        "id": 242,
        "label": "Vaticano",
        "initials": "VA",
        "value": "336"
    },
    {
        "id": 243,
        "label": "Venezuela",
        "initials": "VE",
        "value": "862"
    },
    {
        "id": 244,
        "label": "Vietnã",
        "initials": "VN",
        "value": "704"
    },
    {
        "id": 245,
        "label": "Zâmbia",
        "initials": "ZM",
        "value": "894"
    },
    {
        "id": 246,
        "label": "Zimbábue",
        "initials": "ZW",
        "value": "716"
    }
  ]
  
  export default countries;