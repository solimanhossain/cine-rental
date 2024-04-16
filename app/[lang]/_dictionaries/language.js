import "server-only";

const dictionaries = {
    en: () => import("./en.json").then((module) => module.default),
    bn: () => import("./bn.json").then((module) => module.default),
};

export async function getDictionary(locale) {
    return await dictionaries[locale]();
}
