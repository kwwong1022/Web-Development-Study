const [franc, langs] = [require('franc'), require('langs')];
const input = process.argv[2];
const langCode = franc(input);
if (langCode != 'und') {
    const language = langs.where('3', langCode)
    console.log(language.name);
}

//'Alle menslike wesens word vry'