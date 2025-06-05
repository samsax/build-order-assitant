export type Step = {
  pop: string;
  description: string;
};

export type BuildOrder = {
  name: string;
  steps: Step[];
};

const buildOrders: Record<string, BuildOrder> = {
  scouts: {
    name: "Scouts → Knights",
    steps: [
      { pop: "1–3", description: "Recolectar ovejas" },
      { pop: "4", description: "Lurear jabalí #1" },
      { pop: "5", description: "Recolectar jabalí #1" },
      { pop: "6", description: "Recolectar jabalí #1" },
      { pop: "7", description: "Recolectar jabalí #1" },
      { pop: "8", description: "Recolectar madera (campamento)" },
      { pop: "9", description: "Recolectar madera" },
      { pop: "10", description: "Recolectar madera" },
      { pop: "11", description: "Recolectar madera" },
      { pop: "12", description: "Recolectar frutas (molino)" },
      { pop: "13", description: "Recolectar frutas" },
      { pop: "14", description: "Lurear jabalí #2" },
      { pop: "15", description: "Recolectar jabalí #2" },
      { pop: "16", description: "Recolectar jabalí #2" },
      { pop: "17", description: "Recolectar jabalí #2" },
      { pop: "18", description: "Recolectar frutas" },
      { pop: "19", description: "Recolectar frutas" },
      { pop: "20", description: "Recolectar frutas o ovejas restantes" },
      { pop: "21", description: "Recolectar madera (2.º campamento)" },
      { pop: "-", description: "Haz click a Feudal con 21 aldeanos" },
    ],
  },

  archers: {
    name: "Archer Rush",
    steps: [
      { pop: "1–3", description: "Recolectar ovejas" },
      { pop: "4", description: "Lurear jabalí #1" },
      { pop: "5", description: "Recolectar jabalí #1" },
      { pop: "6", description: "Recolectar jabalí #1" },
      { pop: "7", description: "Recolectar madera (campamento)" },
      { pop: "8", description: "Recolectar madera" },
      { pop: "9", description: "Recolectar madera" },
      { pop: "10", description: "Lurear jabalí #2" },
      { pop: "11", description: "Recolectar jabalí #2" },
      { pop: "12", description: "Recolectar jabalí #2" },
      { pop: "13", description: "Molino + frutas" },
      { pop: "14", description: "Recolectar frutas" },
      { pop: "15", description: "Recolectar frutas" },
      { pop: "16", description: "Recolectar frutas" },
      { pop: "17", description: "Recolectar madera" },
      { pop: "18", description: "Recolectar madera" },
      { pop: "19", description: "Recolectar madera" },
      { pop: "20", description: "Recolectar ovejas/frutas" },
      { pop: "21", description: "Recolectar oro (campamento minero)" },
      { pop: "-", description: "Haz click a Feudal con 21 aldeanos" },
    ],
  },

  maa: {
    name: "Men-at-Arms → Archers",
    steps: [
      { pop: "1–3", description: "Recolectar ovejas" },
      { pop: "4", description: "Lurear jabalí #1" },
      { pop: "5", description: "Recolectar jabalí #1" },
      { pop: "6", description: "Recolectar jabalí #1" },
      { pop: "7", description: "Recolectar madera (campamento)" },
      { pop: "8", description: "Recolectar madera" },
      { pop: "9", description: "Recolectar madera" },
      { pop: "10", description: "Recolectar oro (campamento)" },
      { pop: "11", description: "Recolectar oro" },
      { pop: "12", description: "Lurear jabalí #2" },
      { pop: "13", description: "Recolectar jabalí #2" },
      { pop: "14", description: "Molino + frutas" },
      { pop: "15", description: "Recolectar frutas" },
      { pop: "16", description: "Recolectar frutas" },
      { pop: "17", description: "Recolectar frutas" },
      { pop: "18", description: "Recolectar madera" },
      { pop: "19", description: "Recolectar madera" },
      { pop: "20", description: "Recolectar ovejas/frutas" },
      { pop: "21", description: "Recolectar madera" },
      { pop: "22", description: "Recolectar oro" },
      { pop: "23", description: "Recolectar oro" },
      { pop: "-", description: "Haz click a Feudal con 23 aldeanos" },
    ],
  },

  fastcastle: {
    name: "Fast Castle (Boom/Monjes)",
    steps: [
      { pop: "1–3", description: "Recolectar ovejas" },
      { pop: "4", description: "Lurear jabalí #1" },
      { pop: "5", description: "Recolectar jabalí #1" },
      { pop: "6", description: "Recolectar jabalí #1" },
      { pop: "7", description: "Recolectar madera (campamento)" },
      { pop: "8", description: "Recolectar madera" },
      { pop: "9", description: "Recolectar madera" },
      { pop: "10", description: "Lurear jabalí #2" },
      { pop: "11", description: "Recolectar jabalí #2" },
      { pop: "12", description: "Molino + frutas" },
      { pop: "13", description: "Recolectar frutas" },
      { pop: "14", description: "Recolectar frutas" },
      { pop: "15", description: "Recolectar frutas" },
      { pop: "16", description: "Recolectar frutas" },
      { pop: "17", description: "Recolectar madera" },
      { pop: "18", description: "Recolectar madera" },
      { pop: "19", description: "Recolectar madera" },
      { pop: "20", description: "Recolectar comida (ovejas)" },
      { pop: "21", description: "Recolectar comida (ovejas)" },
      { pop: "22", description: "Recolectar oro" },
      { pop: "23", description: "Recolectar oro" },
      { pop: "24", description: "Recolectar oro" },
      { pop: "25", description: "Recolectar comida" },
      { pop: "26", description: "Recolectar comida" },
      { pop: "27", description: "Recolectar comida" },
      { pop: "-", description: "Haz click a Feudal con 27 aldeanos" },
    ],
  },
};

export default buildOrders;
