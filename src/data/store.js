const Store = {
	groups: [
		{ code: 1, name: "A" },
		{ code: 2, name: "B" },
		{ code: 3, name: "C" },
		{ code: 4, name: "D" },
		{ code: 5, name: "E" },
		{ code: 6, name: "F" },
		{ code: 7, name: "G" },
		{ code: 8, name: "H" },
	],
	teams:[
		{ code: 1, group: 1,	position: "1", icon: "RUS", name: "Russia"	},
		{ code: 2, group: 1,	position: "2", icon: "ARA", name: "Arabia Saudita"	},
		{ code: 3, group: 1,	position: "3", icon: "EGI", name: "Egito"	},
		{ code: 4, group: 1,	position: "4", icon: "URU", name: "Uruguai"	},
		{ code: 5, group: 2,	position: "1", icon: "POR", name: "Portugal"	},
		{ code: 6, group: 2,	position: "2", icon: "ESP", name: "Espanha"	},
		{ code: 7, group: 2,	position: "3", icon: "MAR", name: "Marrocos"	},
		{ code: 8, group: 2,	position: "4", icon: "IRA", name: "Irã"	},
		{ code: 9, group: 3,	position: "1", icon: "FRA", name: "França"	},
		{ code: 10, group: 3,	position: "2", icon: "AUS", name: "Australia"	},
		{ code: 11, group: 3,	position: "3", icon: "PER", name: "Peru"	},
		{ code: 12, group: 3,	position: "4", icon: "DIN", name: "Dinamarca"	},
		{ code: 13, group: 4,	position: "1", icon: "ARG", name: "Argentina"	},
		{ code: 14, group: 4,	position: "2", icon: "ISL", name: "Islândia"	},
		{ code: 15, group: 4,	position: "3", icon: "CRO", name: "Croácia"	},
		{ code: 16, group: 4,	position: "4", icon: "NIG", name: "Nigéria"	},
		{ code: 17, group: 5,	position: "1", icon: "BRA", name: "Brasil"	},
		{ code: 18, group: 5,	position: "2", icon: "SUI", name: "Suiça"	},
		{ code: 19, group: 5,	position: "3", icon: "COS", name: "Costa Rica"	},
		{ code: 20, group: 5,	position: "4", icon: "SER", name: "Sérvia"	},
		{ code: 21, group: 6,	position: "1", icon: "ALE", name: "Alemanha"	},
		{ code: 22, group: 6,	position: "2", icon: "MEX", name: "México"	},
		{ code: 23, group: 6,	position: "3", icon: "SUE", name: "Suécia"	},
		{ code: 24, group: 6,	position: "4", icon: "COR", name: "Coreia do Sul"	},
		{ code: 25, group: 7,	position: "1", icon: "BEL", name: "Bélgica"	},
		{ code: 26, group: 7,	position: "2", icon: "PAN", name: "Panamá"	},
		{ code: 27, group: 7,	position: "3", icon: "TUN", name: "Tunísia"	},
		{ code: 28, group: 7,	position: "4", icon: "ING", name: "Inglaterra"	},
		{ code: 29, group: 8,	position: "1", icon: "POL", name: "Polônia"	},
		{ code: 30, group: 8,	position: "2", icon: "SEN", name: "Senegal"	},
		{ code: 31, group: 8,	position: "3", icon: "COL", name: "Colombia"	},
		{ code: 32, group: 8,	position: "4", icon: "JAP", name: "Japão"	},
	],
	matches: [
		{ code: 1, teams: [ 1, 2 ], result: [ 0, 0 ], day: '14/06', hour: '12:00' }, // a
		{ code: 2, teams: [ 3, 4 ], result: [ 0, 0 ], day: '15/06', hour: '09:00' },
		{ code: 3, teams: [ 5, 6 ], result: [ 0, 0 ], day: '15/06', hour: '15:00' }, // b
		{ code: 4, teams: [ 7, 8 ], result: [ 0, 0 ], day: '15/06', hour: '12:00' },
		{ code: 5, teams: [ 9, 10 ], result: [ 0, 0 ], day: '16/06', hour: '07:00' },// c
		{ code: 6, teams: [ 11, 12 ], result: [ 0, 0 ], day: '16/06', hour: '13:00' }, 
		{ code: 7, teams: [ 13, 14 ], result: [ 0, 0 ], day: '16/06', hour: '10:00' }, // d
		{ code: 8, teams: [ 15, 16 ], result: [ 0, 0 ], day: '16/06', hour: '16:00' },
		{ code: 9, teams: [ 17, 18 ], result: [ 0, 0 ], day: '17/06', hour: '15:00' }, // e
		{ code: 10, teams: [ 19, 20 ], result: [ 0, 0 ], day: '17/06', hour: '09:00' },
		{ code: 11, teams: [ 21, 22 ], result: [ 0, 0 ], day: '17/06', hour: '12:00' }, // f
		{ code: 12, teams: [ 23, 24 ], result: [ 0, 0 ], day: '18/06', hour: '09:00' },
		{ code: 13, teams: [ 25, 26 ], result: [ 0, 0 ], day: '18/06', hour: '12:00' }, // g
		{ code: 14, teams: [ 27, 28 ], result: [ 0, 0 ], day: '18/06', hour: '15:00' },
		{ code: 15, teams: [ 29, 30 ], result: [ 0, 0 ], day: '19/06', hour: '12:00' }, // h
		{ code: 16, teams: [ 31, 32 ], result: [ 0, 0 ], day: '19/06', hour: '09:00' },
		{ code: 17, teams: [ 1, 3 ], result: [ 0, 0 ], day: '19/06', hour: '15:00' },
		{ code: 18, teams: [ 4, 2 ], result: [ 0, 0 ], day: '20/06', hour: '12:00' },
		{ code: 19, teams: [ 5, 7 ], result: [ 0, 0 ], day: '20/06', hour: '09:00' },
		{ code: 20, teams: [ 8, 6 ], result: [ 0, 0 ], day: '20/06', hour: '15:00' },
		{ code: 21, teams: [ 9, 11 ], result: [ 0, 0 ], day: '21/06', hour: '12:00' },
		{ code: 22, teams: [ 12, 10 ], result: [ 0, 0 ], day: '21/06', hour: '09:00' },
		{ code: 23, teams: [ 13, 15 ], result: [ 0, 0 ], day: '21/06', hour: '15:00' },
		{ code: 24, teams: [ 16, 14 ], result: [ 0, 0 ], day: '22/06', hour: '12:00' },
		{ code: 25, teams: [ 17, 19 ], result: [ 0, 0 ], day: '22/06', hour: '09:00' },
		{ code: 26, teams: [ 20, 18 ], result: [ 0, 0 ], day: '22/06', hour: '15:00' },
		{ code: 27, teams: [ 21, 23 ], result: [ 0, 0 ], day: '23/06', hour: '15:00' },
		{ code: 28, teams: [ 24, 22 ], result: [ 0, 0 ], day: '23/06', hour: '12:00' },
		{ code: 29, teams: [ 25, 27 ], result: [ 0, 0 ], day: '23/06', hour: '09:00' },
		{ code: 30, teams: [ 28, 26 ], result: [ 0, 0 ], day: '24/06', hour: '09:00' },
		{ code: 31, teams: [ 29, 31 ], result: [ 0, 0 ], day: '24/06', hour: '15:00' },
		{ code: 32, teams: [ 32, 30 ], result: [ 0, 0 ], day: '24/06', hour: '12:00' },
		{ code: 33, teams: [ 4, 1 ], result: [ 0, 0 ], day: '25/06', hour: '11:00' },
		{ code: 34, teams: [ 2, 3 ], result: [ 0, 0 ], day: '25/06', hour: '11:00' },
		{ code: 35, teams: [ 8, 5 ], result: [ 0, 0 ], day: '25/06', hour: '15:00' },
		{ code: 36, teams: [ 6, 7 ], result: [ 0, 0 ], day: '25/06', hour: '15:00' },
		{ code: 37, teams: [ 12, 9 ], result: [ 0, 0 ], day: '26/06', hour: '11:00' },
		{ code: 38, teams: [ 10, 11 ], result: [ 0, 0 ], day: '26/06', hour: '11:00' },
		{ code: 39, teams: [ 16, 13 ], result: [ 0, 0 ], day: '26/06', hour: '15:00' },
		{ code: 40, teams: [ 14, 15 ], result: [ 0, 0 ], day: '26/06', hour: '15:00' },
		{ code: 41, teams: [ 20, 17 ], result: [ 0, 0 ], day: '27/06', hour: '15:00' },
		{ code: 42, teams: [ 18, 19 ], result: [ 0, 0 ], day: '27/06', hour: '15:00' },
		{ code: 43, teams: [ 24, 21 ], result: [ 0, 0 ], day: '27/06', hour: '11:00' },
		{ code: 44, teams: [ 22, 23 ], result: [ 0, 0 ], day: '27/06', hour: '11:00' },
		{ code: 45, teams: [ 28, 25 ], result: [ 0, 0 ], day: '28/06', hour: '15:00' },
		{ code: 46, teams: [ 26, 27 ], result: [ 0, 0 ], day: '28/06', hour: '15:00' },
		{ code: 47, teams: [ 32, 29 ], result: [ 0, 0 ], day: '28/06', hour: '11:00' },
		{ code: 48, teams: [ 30, 31 ], result: [ 0, 0 ], day: '28/06', hour: '11:00' }
	]
}

export default Store