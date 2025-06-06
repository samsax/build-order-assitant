import styles from "../styles/BuildOrder.module.css";

export type Step = {
  pop?: number;
  villager?: number;
  description: string;
  type: "villager" | "age" | "research" | "build" | "gather" | "attack";
  resource?: "wood" | "food" | "gold" | "stone";
  duration?: number;
};

export type BuildOrder = {
  name: string;
  steps: Step[];
};

// Standard timing values based on Age of Empires 2 research
const standardTimes = {
  villager: 25, // Villager training time
  loom: 25, // Loom research time
  feudalAge: 130, // Feudal Age research time
  castleAge: 160, // Castle Age research time
  imperialAge: 190, // Imperial Age research time
  barracks: 50, // Barracks construction time
  house: 25, // House construction time
  mill: 35, // Mill construction time
  lumberCamp: 35, // Lumber Camp construction time
  miningCamp: 35, // Mining Camp construction time
  militia: 21, // Militia training time
  archer: 35, // Archer training time
  scout: 30, // Scout training time
};

const resourceInfo: Record<string, { icon: string; cardClass: string }> = {
  food: { icon: "🍖", cardClass: styles.foodCard },
  wood: { icon: "🪵", cardClass: styles.woodCard },
  gold: { icon: "🪙", cardClass: styles.goldCard },
  stone: { icon: "🪨", cardClass: styles.stoneCard },
  default: { icon: "❔", cardClass: styles.defaultCard },
};

const typeIcons: Record<string, string> = {
  villager: "👷",
  build: "🏗️",
  gather: "⛏️",
  attack: "⚔️",
  research: "📚",
  age: "🏛️",
  default: "🔹",
};

const buildOrders: Record<string, BuildOrder> = {
  scouts: {
    name: "Scouts",
    steps: [
      {
        pop: 4,
        villager: 3,
        description: "Construye 2 casas y envía a ovejas",
        type: "build",
        resource: "food",
        duration: 50,
      }, // 2 houses = 50s
      {
        pop: 5,
        villager: 4,
        description: "Aldeano 4 a ovejas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 6,
        villager: 5,
        description: "Aldeano 5 a ovejas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 7,
        villager: 6,
        description: "Aldeano 6 a ovejas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 8,
        villager: 7,
        description: "Aldeano 7 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 9,
        villager: 8,
        description: "Aldeano 8 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 10,
        villager: 9,
        description: "Aldeano 9 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 11,
        villager: 10,
        description: "Aldeano 10 caza primer jabalí",
        type: "gather",
        resource: "food",
      },
      {
        pop: 12,
        villager: 11,
        description: "Aldeano 11 a ovejas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 13,
        villager: 12,
        description:
          "Aldeano 12 construye casa, luego molino y se queda en las bayas",
        type: "build",
        resource: "food",
        duration: 60,
      }, // house + mill
      {
        pop: 14,
        villager: 13,
        description: "Aldeano 13 a bayas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 15,
        villager: 14,
        description: "Aldeano 14 a bayas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 16,
        villager: 15,
        description: "Aldeano 15 caza segundo jabalí",
        type: "gather",
        resource: "food",
      },
      {
        pop: 17,
        villager: 16,
        description: "Aldeano 16 a bayas (4 en total)",
        type: "villager",
        resource: "food",
      },
      {
        pop: 18,
        villager: 17,
        description:
          "Aldeano 17 construye casa y luego a comida (ovejas o jabalí)",
        type: "build",
        resource: "food",
        duration: 50,
      }, // house + gather
      {
        pop: 19,
        villager: 18,
        description: "Aldeano 18 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 20,
        villager: 19,
        description: "Aldeano 19 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 21,
        villager: 20,
        description:
          "Envía un aldeano de ovejas a construir un nuevo Camp. Maderero",
        type: "build",
        resource: "wood",
        duration: 35,
      },
      {
        pop: 22,
        villager: 21,
        description: "Haz el Telar en el Centro Urbano",
        type: "research",
      },
      {
        pop: 23,
        villager: 22,
        description: "Avanza a la Edad Feudal",
        type: "age",
        duration: 130,
      },
      {
        pop: 24,
        villager: 23,
        description: "Construye un Cuartel",
        type: "build",
        duration: 50,
      },
      {
        pop: 25,
        villager: 24,
        description: "Envía 3 aldeanos de las ovejas al segundo Camp. Maderero",
        type: "gather",
        resource: "wood",
        duration: 0,
      },
    ],
  },
  militia: {
    name: "3 Milicias",
    steps: [
      {
        pop: 4,
        villager: 3,
        description: "Construye 2 casas y envía a ovejas",
        type: "build",
        resource: "food",
        duration: 50,
      },
      {
        pop: 5,
        villager: 4,
        description: "Aldeano 4 a ovejas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 6,
        villager: 5,
        description: "Aldeano 5 a ovejas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 7,
        villager: 6,
        description: "Aldeano 6 a ovejas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 8,
        villager: 7,
        description: "Aldeano 7 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 9,
        villager: 8,
        description: "Aldeano 8 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 10,
        villager: 9,
        description: "Aldeano 9 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 11,
        villager: 10,
        description: "Aldeano 10 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 12,
        villager: 11,
        description: "Aldeano 11 caza primer jabalí",
        type: "gather",
        resource: "food",
      },
      {
        pop: 13,
        villager: 12,
        description:
          "Aldeano 12 construye casa y luego va a bayas (construir molino)",
        type: "build",
        resource: "food",
        duration: 60,
      },
      {
        pop: 14,
        villager: 13,
        description: "Aldeano 13 a bayas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 15,
        villager: 14,
        description: "Aldeano 14 a bayas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 16,
        villager: 15,
        description: "Aldeano 15 caza segundo jabalí",
        type: "gather",
        resource: "food",
      },
      {
        pop: 17,
        villager: 16,
        description: "Aldeano 16 a bayas (4 en total)",
        type: "villager",
        resource: "food",
      },
      {
        pop: 18,
        villager: 17,
        description:
          "Aldeano 17 construye casa y luego a comida (ovejas o jabalí)",
        type: "build",
        resource: "food",
        duration: 50,
      },
      {
        pop: 19,
        villager: 18,
        description:
          "Aldeano 18 construye Cuartel y luego a madera (5 en total)",
        type: "build",
        resource: "wood",
        duration: 75,
      }, // barracks + gather
      {
        pop: 20,
        villager: 19,
        description: "Aldeano 19 a oro",
        type: "villager",
        resource: "gold",
      },
      {
        pop: 21,
        villager: 20,
        description: "Aldeano 20 a oro",
        type: "villager",
        resource: "gold",
      },
      {
        pop: 22,
        villager: 21,
        description: "Desarrollar Telar",
        type: "research",
      },
      {
        pop: 23,
        villager: 22,
        description: "Avanzar a Edad Feudal",
        type: "age",
        duration: 130,
      },
      {
        pop: 24,
        villager: 23,
        description:
          "Mientras avanzas de edad, construye nuevo Camp. Maderero y envía aldeanos de las ovejas a madera. (5 aldeanos en cada Camp. Maderero es ideal)",
        type: "build",
        resource: "wood",
        duration: 35,
      },
      {
        pop: 25,
        villager: 24,
        description: "Cuando empiecen a acabarse las ovejas, haz 3-4 granjas",
        type: "build",
        resource: "food",
        duration: 60,
      }, // farm construction
      {
        pop: 26,
        villager: 25,
        description: "Crea 3 milicias",
        type: "attack",
        duration: 63,
      }, // 3 militia = 21s each
    ],
  },
  archers: {
    name: "Arqueros",
    steps: [
      {
        pop: 4,
        villager: 3,
        description: "Construye 2 casas y envía a ovejas",
        type: "build",
        resource: "food",
        duration: 50,
      },
      {
        pop: 5,
        villager: 4,
        description: "Aldeano 4 a ovejas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 6,
        villager: 5,
        description: "Aldeano 5 a ovejas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 7,
        villager: 6,
        description: "Aldeano 6 a ovejas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 8,
        villager: 7,
        description: "Aldeano 7 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 9,
        villager: 8,
        description: "Aldeano 8 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 10,
        villager: 9,
        description: "Aldeano 9 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 11,
        villager: 10,
        description: "Aldeano 10 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 12,
        villager: 11,
        description: "Aldeano 11 caza primer jabalí",
        type: "gather",
        resource: "food",
      },
      {
        pop: 13,
        villager: 12,
        description:
          "Aldeano 12 construye casa y luego va a bayas (construye molino)",
        type: "build",
        resource: "food",
        duration: 60,
      },
      {
        pop: 14,
        villager: 13,
        description: "Aldeano 13 a bayas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 15,
        villager: 14,
        description: "Aldeano 14 a bayas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 16,
        villager: 15,
        description: "Aldeano 15 caza segundo jabalí",
        type: "gather",
        resource: "food",
      },
      {
        pop: 17,
        villager: 16,
        description: "Aldeano 16 a bayas (4 en total)",
        type: "villager",
        resource: "food",
      },
      {
        pop: 18,
        villager: 17,
        description: "Aldeano 17 construye casa y luego va a ovejas o jabalí",
        type: "build",
        resource: "food",
        duration: 50,
      },
      {
        pop: 19,
        villager: 18,
        description: "Aldeano 18 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 20,
        villager: 19,
        description: "Aldeano 19 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 21,
        villager: 20,
        description:
          "Envía un aldeano de ovejas a construir un segundo campamento maderero",
        type: "build",
        resource: "wood",
        duration: 35,
      },
      {
        pop: 21,
        villager: 20,
        description: "Haz el Telar en el Centro Urbano",
        type: "research",
      },
      {
        pop: 21,
        villager: 20,
        description: "Avanza a la Edad Feudal",
        type: "age",
        duration: 130,
      },
      {
        pop: 21,
        villager: 20,
        description: "Mientras avanzas, construye un Cuartel",
        type: "build",
        duration: 50,
      },
      {
        pop: 21,
        villager: 20,
        description: "Envía 3 aldeanos de ovejas a oro",
        type: "gather",
        resource: "gold",
        duration: 0,
      },
    ],
  },
  fastCastle: {
    name: "Fast Castle",
    steps: [
      {
        pop: 4,
        villager: 3,
        description:
          "Aldeanos 1 y 2 construyen casa juntos, aldeano 3 construye casa separada",
        type: "build",
        resource: "food",
        duration: 50,
      },
      {
        pop: 5,
        villager: 4,
        description: "Aldeano 4 a ovejas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 6,
        villager: 5,
        description: "Aldeano 5 a ovejas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 7,
        villager: 6,
        description: "Aldeano 6 a ovejas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 8,
        villager: 7,
        description: "Aldeano 7 construye campamento maderero",
        type: "build",
        resource: "wood",
      },
      {
        pop: 9,
        villager: 8,
        description: "Aldeano 8 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 10,
        villager: 9,
        description: "Aldeano 9 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 11,
        villager: 10,
        description:
          "Aldeano 10 construye casa cerca del jabalí, luego caza primer jabalí",
        type: "gather",
        resource: "food",
        duration: 50,
      },
      {
        pop: 12,
        villager: 11,
        description: "Aldeano 11 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 13,
        villager: 12,
        description: "Aldeano 12 construye molino en bayas",
        type: "build",
        resource: "food",
      },
      {
        pop: 14,
        villager: 13,
        description: "Aldeano 13 a bayas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 15,
        villager: 14,
        description: "Aldeano 14 a bayas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 16,
        villager: 15,
        description: "Aldeano 15 caza segundo jabalí",
        type: "gather",
        resource: "food",
      },
      {
        pop: 17,
        villager: 16,
        description: "Aldeano 16 a bayas",
        type: "villager",
        resource: "food",
      },
      {
        pop: 18,
        villager: 17,
        description: "Aldeano 17 construye casa, luego a ovejas/jabalí",
        type: "build",
        resource: "food",
      },
      {
        pop: 19,
        villager: 18,
        description: "Aldeano 18 a madera",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 20,
        villager: 19,
        description: "Aldeano 19 construye segundo campamento maderero",
        type: "build",
        resource: "wood",
      },
      {
        pop: 21,
        villager: 20,
        description: "Aldeano 20 a oro",
        type: "villager",
        resource: "gold",
      },
      {
        pop: 22,
        villager: 21,
        description: "Aldeano 21 a oro",
        type: "villager",
        resource: "gold",
      },
      {
        pop: 23,
        villager: 22,
        description: "Avanzar a Edad Feudal (10 comida, 4 madera, 3 oro)",
        type: "age",
        duration: 130,
      },
      {
        pop: 23,
        villager: 22,
        description: "Un leñador construye cuartel durante Feudal",
        type: "build",
      },
      {
        pop: 23,
        villager: 22,
        description: "2 aldeanos de bayas construyen herrería y establo",
        type: "build",
      },
      {
        pop: 25,
        villager: 24,
        description: "Aldeanos 24 a oro",
        type: "villager",
      },
      {
        pop: 25,
        villager: 24,
        description: "Aldeanos 25 a oro",
        type: "gather",
        resource: "gold",
      },
      {
        pop: 25,
        villager: 24,
        description: "Avanzar a Edad de Castillos",
        type: "age",
        duration: 160,
      },
      {
        pop: 25,
        villager: 24,
        description: "Investigar Hacha Doble",
        type: "research",
        resource: "wood",
      },
    ],
  },
  nomada: {
    name: "Nómada - Boom de Agua",
    steps: [
      {
        pop: 3,
        villager: 3,
        description:
          "2 aldeanos iniciales construyen el Centro Urbano, 1 aldeano construye un Muelle",
        type: "build",
        resource: "wood",
        duration: 100,
      },
      {
        pop: 4,
        villager: 4,
        description: "Aldeano 4 a madera.",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 5,
        villager: 4,
        description: "Crea el primer Barco Pesquero. Tu población ahora es 5.",
        type: "build",
        resource: "food",
      },
      {
        pop: 6,
        villager: 5,
        description: "Aldeano 5 a madera.",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 7,
        villager: 5,
        description: "Crea un Barco Pesquero. Un leñador construye una casa.",
        type: "build",
        resource: "food",
        duration: 5,
      },
      {
        pop: 8,
        villager: 6,
        description: "Aldeano 6 a madera.",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 9,
        villager: 6,
        description: "Crea un Barco Pesquero.",
        type: "build",
        resource: "food",
        duration: 5,
      },
      {
        pop: 10,
        villager: 7,
        description: "Aldeano 7 a madera.",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 11,
        villager: 7,
        description: "Crea un Barco Pesquero.",
        type: "build",
        resource: "food",
        duration: 5,
      },
      {
        pop: 12,
        villager: 8,
        description: "Aldeano 8 a madera (objetivo: 7-8 leñadores).",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 13,
        villager: 9,
        description: "Aldeano 9 a madera.",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 14,
        villager: 9,
        description: "Crea un Barco Pesquero. Un leñador construye una casa.",
        type: "build",
        resource: "food",
        duration: 5,
      },
      {
        pop: 15,
        villager: 10,
        description: "Aldeano 10 a madera.",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 16,
        villager: 10,
        description: "Crea un Barco Pesquero.",
        type: "build",
        resource: "food",
        duration: 5,
      },
      {
        pop: 17,
        villager: 11,
        description: "Aldeano 11 construye Campamento Minero en oro.",
        type: "build",
        resource: "gold",
        duration: 35,
      },
      {
        pop: 18,
        villager: 12,
        description: "Aldeano 12 a oro.",
        type: "villager",
        resource: "gold",
      },
      {
        pop: 19,
        villager: 13,
        description: "Aldeano 13 a oro.",
        type: "villager",
        resource: "gold",
      },
      {
        pop: 20,
        villager: 13,
        description: "Crea un Barco Pesquero.",
        type: "build",
        resource: "food",
        duration: 5,
      },
      {
        pop: 21,
        villager: 14,
        description: "Aldeano 14 a madera o a construir una casa.",
        type: "villager",
        resource: "wood",
      },
      {
        pop: 22,
        villager: 14,
        description: "Crea un Barco Pesquero (objetivo: 8 barcos).",
        type: "build",
        resource: "food",
      },
      {
        pop: 22,
        villager: 14,
        description: "Desarrolla Telar.",
        type: "research",
      },
      {
        pop: 22,
        villager: 14,
        description: "Avanza a la Edad Feudal (Pob: 14 aldeanos, 8 pesqueros).",
        type: "age",
        duration: 130,
      },
      {
        description:
          "Mientras avanzas, construye un cuartel con un aldeano de madera.",
        type: "build",
        resource: "wood",
        duration: 50,
      },
      {
        description:
          "Al llegar a Feudal, investiga Collera y Hacha de Doble Filo. Añade un segundo Muelle si es seguro.",
        type: "research",
      },
    ],
  },
};

export { buildOrders, resourceInfo, typeIcons, standardTimes };
