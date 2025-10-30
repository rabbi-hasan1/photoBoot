import "server-only";
const dictionaris = {
    en: () => import("./en.json").then((module) => module.default),
    bn: () => import("./bn.json").then((module) => module.default),
}

export const getDictionaris = async (locale) => dictionaris[locale]();