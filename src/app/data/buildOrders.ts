import styles from '../styles/BuildOrder.module.css';

export type Step = {
  pop?: number;
  villager?: number;
  description: string;
  type: "villager" | "age" | "research";
  resource?: "wood" | "food" | "gold" | "stone";
  time?: number; 
};

export type BuildOrder = {
  name: string;
  steps: Step[];

  
};

const resourceInfo: Record<string, { icon: string; cardClass: string }> = {
    food: { icon: '🍖', cardClass: styles.foodCard },
    wood: { icon: '🪵', cardClass: styles.woodCard },
    gold: { icon: '🪙', cardClass: styles.goldCard },
    stone: { icon: '🪨', cardClass: styles.stoneCard },
    default: { icon: '❔', cardClass: styles.defaultCard },
};

const typeIcons: Record<string, string> = {
    build: '🏗️',
    gather: '⛏️',
    attack: '⚔️',
    default: '🔹',
};

const buildOrders: Record<string, BuildOrder> = {
  scouts: {
    name: "Scouts",
    steps: [
      { pop: 4, villager: 3, description: "Construye 2 casas y envía a ovejas", type: "villager", resource: "food" },
      { pop: 5, villager: 4, description: "Aldeano 4 a ovejas", type: "villager", resource: "food" },
      { pop: 6, villager: 5, description: "Aldeano 5 a ovejas", type: "villager", resource: "food" },
      { pop: 7, villager: 6, description: "Aldeano 6 a ovejas", type: "villager", resource: "food" },
      { pop: 8, villager: 7, description: "Aldeano 7 a madera", type: "villager", resource: "wood" },
      { pop: 9, villager: 8, description: "Aldeano 8 a madera", type: "villager", resource: "wood" },
      { pop: 10, villager: 9, description: "Aldeano 9 a madera", type: "villager", resource: "wood" },
      { pop: 11, villager: 10, description: "Aldeano 10 caza primer jabalí", type: "villager", resource: "food" },
      { pop: 12, villager: 11, description: "Aldeano 11 a ovejas", type: "villager", resource: "food" },
      { pop: 13, villager: 12, description: "Aldeano 12 construye casa, luego molino y se queda en las bayas", type: "villager", resource: "food" },
      { pop: 14, villager: 13, description: "Aldeano 13 a bayas", type: "villager", resource: "food" },
      { pop: 15, villager: 14, description: "Aldeano 14 a bayas", type: "villager", resource: "food" },
      { pop: 16, villager: 15, description: "Aldeano 15 caza segundo jabalí", type: "villager", resource: "food" },
      { pop: 17, villager: 16, description: "Aldeano 16 a bayas (4 en total)", type: "villager", resource: "food" },
      { pop: 18, villager: 17, description: "Aldeano 17 construye casa y luego a comida (ovejas o jabalí)", type: "villager", resource: "food" },
      { pop: 19, villager: 18, description: "Aldeano 18 a madera", type: "villager", resource: "wood" },
      { pop: 20, villager: 19, description: "Aldeano 19 a madera", type: "villager", resource: "wood" },
      { pop: 21, villager: 20, description: "Envía un aldeano de ovejas a construir un nuevo Camp. Maderero", type: "villager", resource: "wood" },
      { pop: 22, villager: 21, description: "Haz el Telar en el Centro Urbano", type: "research" },
      { pop: 23, villager: 22, description: "Avanza a la Edad Feudal", type: "age" },
      { pop: 24, villager: 23, description: "Construye un Cuartel", type: "villager" },
      { pop: 25, villager: 24, description: "Envía 3 aldeanos de las ovejas al segundo Camp. Maderero", type: "villager", resource: "wood" },
    ],
  },
  militia: {
    name: "3 Milicias",
    steps: [
      { pop: 4, villager: 3, description: "Construye 2 casas y envía a ovejas", type: "villager", resource: "food" },
      { pop: 5, villager: 4, description: "Aldeano 4 a ovejas", type: "villager", resource: "food" },
      { pop: 6, villager: 5, description: "Aldeano 5 a ovejas", type: "villager", resource: "food" },
      { pop: 7, villager: 6, description: "Aldeano 6 a ovejas", type: "villager", resource: "food" },
      { pop: 8, villager: 7, description: "Aldeano 7 a madera", type: "villager", resource: "wood" },
      { pop: 9, villager: 8, description: "Aldeano 8 a madera", type: "villager", resource: "wood" },
      { pop: 10, villager: 9, description: "Aldeano 9 a madera", type: "villager", resource: "wood" },
      { pop: 11, villager: 10, description: "Aldeano 10 a madera", type: "villager", resource: "wood" },
      { pop: 12, villager: 11, description: "Aldeano 11 caza primer jabalí", type: "villager", resource: "food" },
      { pop: 13, villager: 12, description: "Aldeano 12 construye casa y luego va a bayas (construir molino)", type: "villager", resource: "food" },
      { pop: 14, villager: 13, description: "Aldeano 13 a bayas", type: "villager", resource: "food" },
      { pop: 15, villager: 14, description: "Aldeano 14 a bayas", type: "villager", resource: "food" },
      { pop: 16, villager: 15, description: "Aldeano 15 caza segundo jabalí", type: "villager", resource: "food" },
      { pop: 17, villager: 16, description: "Aldeano 16 a bayas (4 en total)", type: "villager", resource: "food" },
      { pop: 18, villager: 17, description: "Aldeano 17 construye casa y luego a comida (ovejas o jabalí)", type: "villager", resource: "food" },
      { pop: 19, villager: 18, description: "Aldeano 18 construye Cuartel y luego a madera (5 en total)", type: "villager", resource: "wood" },
      { pop: 20, villager: 19, description: "Aldeano 19 a oro", type: "villager", resource: "gold" },
      { pop: 21, villager: 20, description: "Aldeano 20 a oro", type: "villager", resource: "gold" },
      { pop: 22, villager: 21, description: "Desarrollar Telar", type: "research" },
      { pop: 23, villager: 22, description: "Avanzar a Edad Feudal", type: "age" },
      { pop: 24, villager: 23, description: "Mientras avanzas de edad, construye nuevo Camp. Maderero y envía aldeanos de las ovejas a madera. (5 aldeanos en cada Camp. Maderero es ideal)", type: "villager", resource: "wood" },
      { pop: 25, villager: 24, description: "Cuando empiecen a acabarse las ovejas, haz 3-4 granjas", type: "villager", resource: "food" },
      { pop: 26, villager: 25, description: "Crea 3 milicias", type: "villager" },
    ],
  },
  archers: {
    name: "Arqueros",
    steps: [
  { pop: 4, villager: 3, description: "Construye 2 casas y envía a ovejas", type: "villager", resource: "food" },
  { pop: 5, villager: 4, description: "Aldeano 4 a ovejas", type: "villager", resource: "food" },
  { pop: 6, villager: 5, description: "Aldeano 5 a ovejas", type: "villager", resource: "food" },
  { pop: 7, villager: 6, description: "Aldeano 6 a ovejas", type: "villager", resource: "food" },
  { pop: 8, villager: 7, description: "Aldeano 7 a madera", type: "villager", resource: "wood" },
  { pop: 9, villager: 8, description: "Aldeano 8 a madera", type: "villager", resource: "wood" },
  { pop: 10, villager: 9, description: "Aldeano 9 a madera", type: "villager", resource: "wood" },
  { pop: 11, villager: 10, description: "Aldeano 10 a madera", type: "villager", resource: "wood" },
  { pop: 12, villager: 11, description: "Aldeano 11 caza primer jabalí", type: "villager", resource: "food" },
  { pop: 13, villager: 12, description: "Aldeano 12 construye casa y luego va a bayas (construye molino)", type: "villager", resource: "food" },
  { pop: 14, villager: 13, description: "Aldeano 13 a bayas", type: "villager", resource: "food" },
  { pop: 15, villager: 14, description: "Aldeano 14 a bayas", type: "villager", resource: "food" },
  { pop: 16, villager: 15, description: "Aldeano 15 caza segundo jabalí", type: "villager", resource: "food" },
  { pop: 17, villager: 16, description: "Aldeano 16 a bayas (4 en total)", type: "villager", resource: "food" },
  { pop: 18, villager: 17, description: "Aldeano 17 construye casa y luego va a ovejas o jabalí", type: "villager", resource: "food" },
  { pop: 19, villager: 18, description: "Aldeano 18 a madera", type: "villager", resource: "wood" },
  { pop: 20, villager: 19, description: "Aldeano 19 a madera", type: "villager", resource: "wood" },
  { pop: 21, villager: 20, description: "Envía un aldeano de ovejas a construir un segundo campamento maderero", type: "villager", resource: "wood" },
  { pop: 21, villager: 20, description: "Haz el Telar en el Centro Urbano", type: "research" },
  { pop: 21, villager: 20, description: "Avanza a la Edad Feudal", type: "age" },
  { pop: 21, villager: 20, description: "Mientras avanzas, construye un Cuartel", type: "villager" },
  { pop: 21, villager: 20, description: "Envía 3 aldeanos de ovejas a oro", type: "villager", resource: "gold" }
],
  },
};

export { buildOrders, resourceInfo, typeIcons };