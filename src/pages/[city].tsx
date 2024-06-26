// pages/[city].js
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import ProvidersInCity from "../components/ProvidersInCity/ProvidersInCity";
import AboutUs from "../components/AboutUs/AboutUs";
import SliderTariffsMain from "../components/SliderTariffsMain/SliderTariffsMain";
import Advantages from "../components/Advantages/Advantages";
import ConnectionSteps from "../components/ConnectionSteps/ConnectionSteps";
import HelpForm from "../components/HelpForm/HelpForm";
import Questions from "../components/Questions/Questions";
import Cities from "../components/Cities/Cities";
import Newsletter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/Footer/Footer";
import PopUpLead from "@/components/PopUpLead/PopUpLead";
import PopUpAgreement from "@/components/PopUpAgreement/PopUpAgreement";
import PopUpPolicy from "@/components/PopUpPolicy/PopUpPolicy";
import Head from "next/head";

const CityPage = ({ cityData }: { cityData: any }): JSX.Element => {
  if (!cityData) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>
          Тарифы на интернет в {cityData.districtName.namewhere} 🙋‍♂️ Домашний
          интернет в квартиру | Тарифы и акции на интернет - On-wifi
        </title>
        <meta
          name="description"
          content={
            "Какой интернет подключить " +
            cityData.districtName.name +
            "➡️ Выбрать интернет на квартиру в " +
            cityData.districtName.namewhere +
            " 🌐 Выбрать лучший тариф на домашний интернет"
          }
        />
        <meta name="apple-mobile-web-app-title" content="On-wifi" />
      </Head>
      <Header></Header>
      <Main></Main>
      <ProvidersInCity
        providers={cityData.providers}
        nameLocationWhere={cityData.districtName.namewhere}
      ></ProvidersInCity>
      <SliderTariffsMain
        nameCityWhere={cityData.districtName.namewhere}
        tariffs={cityData.tariffs}
      ></SliderTariffsMain>
      <AboutUs></AboutUs>
      <Advantages></Advantages>
      <ConnectionSteps></ConnectionSteps>
      <HelpForm></HelpForm>
      <Questions></Questions>
      <Cities></Cities>
      <Newsletter></Newsletter>
      <Footer></Footer>
      <PopUpLead></PopUpLead>
      <PopUpAgreement></PopUpAgreement>
      <PopUpPolicy></PopUpPolicy>
    </>
  );
};

export async function getStaticPaths() {
  const cities = [
    "Beloretsk",
    "Bijsk",
    "Vidnoe",
    "Votkinsk",
    "Gelendzhik",
    "Dudinka",
    "Elabuga",
    "Zainsk",
    "Zhukovka",
    "Znamensk",
    "Izhevsk",
    "Kazan",
    "Kstovo",
    "Kudrovo",
    "Lesozavodsk",
    "Ljubertsy",
    "Mozhga",
    "Narimanov",
    "Nahodka",
    "Neftekamsk",
    "Opochka",
    "Ostrov",
    "Pechory",
    "Pytalovo",
    "Rezh",
    "Rybnoe",
    "Sarapul",
    "Sochi",
    "Stroitel",
    "Ussurijsk",
    "Chehov",
    "Elektrostal",
    "Jakutsk",
    "Balashiha",
    "Barnaul",
    "Krasnogorsk",
    "Lobnja",
    "Mytischi",
    "Odintsovo",
    "Pushkino",
    "Solnechnogorsk",
    "Troitsk",
    "Himki",
    "Schelkovo",
    "Schigry",
    "Elets",
    "Ivanovo",
    "Nojabrsk",
    "Tula",
    "Shatura",
    "Ishim",
    "Korolev",
    "Vyborg",
    "Gatchina",
    "Dobrjanka",
    "Iskitim",
    "Kamyzjak",
    "Novodvinsk",
    "Novotroitsk",
    "Orel",
    "Penza",
    "Sarov",
    "Sorochinsk",
    "Taganrog",
    "Jasnyj",
    "Buzuluk",
    "Vichuga",
    "Klin",
    "Korsakov",
    "Ljantor",
    "Novoaltajsk",
    "Pokachi",
    "Revda",
    "Chita",
    "Holmsk",
    "Jartsevo",
    "Georgievsk",
    "Dolinsk",
    "Kashira",
    "Novoshahtinsk",
    "Pustoshka",
    "Rjazan",
    "Samara",
    "Tara",
    "Tver",
    "Gukovo",
    "Drezna",
    "Ozery",
    "Pyt-Jah",
    "Kamyshlov",
    "Kotovsk",
    "Proletarsk",
    "Jarovoe",
    "Seltso",
    "Sol-Iletsk",
    "Kamyshin",
    "Kuvandyk",
    "Sljudjanka",
    "Cheremhovo",
    "Chusovoj",
    "Kansk",
    "Svirsk",
    "Skopin",
    "Morshansk",
    "Rjazhsk",
    "Koltushi",
    "Marks",
    "Shlisselburg",
    "Balashov",
    "Kalininsk",
    "Kopejsk",
    "Kostroma",
    "Kjahta",
    "Rybinsk",
    "Tutaev",
    "Poronajsk",
    "Korocha",
    "Aniva",
    "Temnikov",
    "Jadrin",
    "Artem",
    "Zavodoukovsk",
    "Konakovo",
    "Vladimir",
    "Belinskij",
    "Kurgan",
    "Tomsk",
    "Voronezh",
    "Uljanovsk",
    "Ust-Labinsk",
    "Gorodische",
    "Saratov",
    "Dalnerechensk",
    "Raduzhnyj",
    "Fatezh",
    "Habarovsk",
    "Kaliningrad",
    "Kingisepp",
    "Lipetsk",
    "Sebezh",
    "Mahachkala",
    "Hanty-Mansijsk",
    "Sevsk",
    "Murmansk",
    "Nevelsk",
    "Nolinsk",
    "Omsk",
    "Orenburg",
    "Smolensk",
    "Tajshet",
    "Tambov",
    "Cheljabinsk",
    "Belebej",
    "Belev",
    "Abaza",
    "Abakan",
    "Agidel",
    "Agryz",
    "Adygejsk",
    "Aznakaevo",
    "Azov",
    "Alagir",
    "Alapaevsk",
    "Alatyr",
    "Aldan",
    "Alejsk",
    "Aleksandrov",
    "Alekseevka",
    "Aleksin",
    "Almetevsk",
    "Amursk",
    "Anadyr",
    "Angarsk",
    "Anzhero-Sudzhensk",
    "Apatity",
    "Aprelevka",
    "Argun",
    "Ardon",
    "Arzamas",
    "Arsk",
    "Urus-Martan",
    "Arhangelsk",
    "Asbest",
    "Asino",
    "Atkarsk",
    "Achinsk",
    "Asha",
    "Babaevo",
    "Bavly",
    "Bajkalsk",
    "Bajmak",
    "Bakal",
    "Baksan",
    "Balakovo",
    "Balahna",
    "Balej",
    "Baltijsk",
    "Barysh",
    "Bezhetsk",
    "Belaja Holunitsa",
    "Belogorsk",
    "Borovichi",
    "Belokuriha",
    "Donetsk",
    "Beloozerskij",
    "Belousovo",
    "Belojarskij",
    "Berdsk",
    "Berezniki",
    "Berezovskij",
    "Beslan",
    "Bikin",
    "Bilibino",
    "Birsk",
    "Moskva",
    "Blagodarnyj",
    "Bobrov",
    "Bogdanovich",
    "Bogorodsk",
    "Bogotol",
    "Bodajbo",
    "Bolgar",
    "Bologoe",
    "Bolotnoe",
    "Bolhov",
    "Bor",
    "Borzja",
    "Borovsk",
    "Bratsk",
    "Bronnitsy",
    "Bugulma",
    "Buguruslan",
    "Budennovsk",
    "Buinsk",
    "Buturlinovka",
    "Valdaj",
    "Valujki",
    "Velikie Luki",
    "Rostov",
    "Uglegorsk",
    "Velikij Novgorod",
    "Velikij Ustjug",
    "Velsk",
    "Venev",
    "Vereschagino",
    "Verhnij Ufalej",
    "Verhnjaja Pyshma",
    "Verhnjaja Salda",
    "Verhnjaja Tura",
    "Verhoture",
    "Vesegonsk",
    "Vetluga",
    "Viljuchinsk",
    "Vihorevka",
    "Vladivostok",
    "Volgodonsk",
    "Volgorechensk",
    "Volzhskij",
    "Vologda",
    "Volokolamsk",
    "Volosovo",
    "Volchansk",
    "Volsk",
    "Vorkuta",
    "Voskresensk",
    "Vsevolozhsk",
    "Vuktyl",
    "Vyksa",
    "Vytegra",
    "Vyshnij Volochek",
    "Vjazniki",
    "Vjazma",
    "Gavrilov Posad",
    "Gavrilov-Jam",
    "Gagarin",
    "Gadzhievo",
    "Gaj",
    "Galich",
    "Gvardejsk",
    "Glazov",
    "Gorbatov",
    "Gornozavodsk",
    "Gornjak",
    "Gorodets",
    "Gorodovikovsk",
    "Gorohovets",
    "Moskva",
    "Gremjachinsk",
    "Groznyj",
    "Grjazovets",
    "Gubaha",
    "Gubkin",
    "Gubkinskij",
    "Gudermes",
    "Gusev",
    "Gusinoozersk",
    "Gus-Hrustalnyj",
    "Davlekanovo",
    "Dalmatovo",
    "Danilov",
    "Dankov",
    "Birjuch",
    "Desnogorsk",
    "Dzerzhinsk",
    "Divnogorsk",
    "Digora",
    "Dimitrovgrad",
    "Dmitrovsk",
    "Dolgoprudnyj",
    "Domodedovo",
    "Donskoj",
    "Dubna",
    "Duhovschina",
    "Djurtjuli",
    "Egorevsk",
    "Ejsk",
    "Elizovo",
    "Elnja",
    "Emanzhelinsk",
    "Emva",
    "Enisejsk",
    "Ermolino",
    "Ershov",
    "Efremov",
    "Zheleznovodsk",
    "Zheleznogorsk",
    "Zherdevka",
    "Zhizdra",
    "Zhirnovsk",
    "Zhukovskij",
    "Zavitinsk",
    "Zavolzhsk",
    "Zavolzhe",
    "Zakamensk",
    "Zaozernyj",
    "Zaozersk",
    "Zapoljarnyj",
    "Zarajsk",
    "Zarechnyj",
    "Zarinsk",
    "Zvenigovo",
    "Zelenogorsk",
    "Zelenodolsk",
    "Zelenokumsk",
    "Zernograd",
    "Zeja",
    "Zima",
    "Zlynka",
    "Zmeinogorsk",
    "Zubtsov",
    "Zuevka",
    "Ivanteevka",
    "Ivdel",
    "Igarka",
    "Izberbash",
    "Izobilnyj",
    "Ilanskij",
    "Inza",
    "Inta",
    "Irbit",
    "Isilkul",
    "Istra",
    "Ishimbaj",
    "Joshkar-Ola",
    "Kadnikov",
    "Kalachinsk",
    "Kaltan",
    "Kaljazin",
    "Kambarka",
    "Kamenka",
    "Kamennogorsk",
    "Kamensk-Shahtinskij",
    "Kameshkovo",
    "Kanash",
    "Kandalaksha",
    "Karabanovo",
    "Karabash",
    "Karabulak",
    "Karasuk",
    "Karachaevsk",
    "Karachev",
    "Karpinsk",
    "Kartaly",
    "Kasimov",
    "Kasli",
    "Kaspijsk",
    "Katajsk",
    "Kachkanar",
    "Kashin",
    "Kedrovyj",
    "Kemerovo",
    "Derbent",
    "Kimovsk",
    "Kimry",
    "Kineshma",
    "Kirensk",
    "Kirzhach",
    "Kirishi",
    "Kirovgrad",
    "Kirsanov",
    "Kiselevsk",
    "Kislovodsk",
    "Klintsy",
    "Knjaginino",
    "Kovdor",
    "Kovrov",
    "Kovylkino",
    "Kogalym",
    "Sajansk",
    "Kozelsk",
    "Kozlovka",
    "Kola",
    "Kologriv",
    "Kolomna",
    "Kolpashevo",
    "Kolchugino",
    "Komsomolsk-na-Amure",
    "Kondopoga",
    "Kondrovo",
    "Korablino",
    "Korkino",
    "Kosterevo",
    "Kostomuksha",
    "Kotelniki",
    "Kotelnikovo",
    "Kotelnich",
    "Kotlas",
    "Kohma",
    "Krasavino",
    "Krasnovishersk",
    "Krasnozavodsk",
    "Krasnoznamensk",
    "Krasnokamensk",
    "Krasnoslobodsk",
    "Krasnoturinsk",
    "Krasnoufimsk",
    "Krasnyj Kut",
    "Krasnyj Sulin",
    "Krasnyj Holm",
    "Kremenki",
    "Kropotkin",
    "Krymsk",
    "Kubinka",
    "Kudymkar",
    "Kukmor",
    "Kulebaki",
    "Kumertau",
    "Kungur",
    "Kupino",
    "Kurlovo",
    "Kurtamysh",
    "Kurchaloj",
    "Kurchatov",
    "Kusa",
    "Kushva",
    "Kyzyl",
    "Kyshtym",
    "Labytnangi",
    "Lagan",
    "Ladushkin",
    "Laishevo",
    "Lakinsk",
    "Langepas",
    "Leninogorsk",
    "Leninsk-Kuznetskij",
    "Lensk",
    "Lermontov",
    "Lesnoj",
    "Lesosibirsk",
    "Livny",
    "Lipki",
    "Liski",
    "Lihoslavl",
    "Lodejnoe Pole",
    "Luga",
    "Luza",
    "Lukojanov",
    "Luhovitsy",
    "Lyskovo",
    "Kizljar",
    "Lgov",
    "Ljuban",
    "Ljubim",
    "Magadan",
    "Magas",
    "Magnitogorsk",
    "Majkop",
    "Majskij",
    "Makushino",
    "Malaja Vishera",
    "Malgobek",
    "Malojaroslavets",
    "Mamadysh",
    "Mamonovo",
    "Manturovo",
    "Mariinsk",
    "Mariinskij Posad",
    "Megion",
    "Medvezhegorsk",
    "Mednogorsk",
    "Medyn",
    "Mezhdurechensk",
    "Mezen",
    "Melenki",
    "Meleuz",
    "Menzelinsk",
    "Miass",
    "Mikun",
    "Millerovo",
    "Minusinsk",
    "Minjar",
    "Mirnyj",
    "Mihajlovka",
    "Mihajlovsk",
    "Michurinsk",
    "Mogocha",
    "Mozhajsk",
    "Mozdok",
    "Monchegorsk",
    "Morozovsk",
    "Mosalsk",
    "Murom",
    "Myski",
    "Myshkin",
    "Naberezhnye Chelny",
    "Navashino",
    "Navoloki",
    "Nadym",
    "Nazarovo",
    "Nazyvaevsk",
    "Nalchik",
    "Naro-Fominsk",
    "Nartkala",
    "Nevel",
    "Nevinnomyssk",
    "Nevjansk",
    "Nelidovo",
    "Neman",
    "Nerehta",
    "Nerchinsk",
    "Nerjungri",
    "Neftegorsk",
    "Neftekumsk",
    "Neftejugansk",
    "Neja",
    "Nizhnekamsk",
    "Nizhneudinsk",
    "Nizhnie Sergi",
    "Nizhnij Lomov",
    "Nizhnij Novgorod",
    "Nizhnij Tagil",
    "Nizhnjaja Tura",
    "Nikolaevsk-na-Amure",
    "Nikolskoe",
    "Novaja Ladoga",
    "Novaja Ljalja",
    "Novoanninskij",
    "Novozybkov",
    "Novokuznetsk",
    "Novokujbyshevsk",
    "Novomichurinsk",
    "Novomoskovsk",
    "Novopavlovsk",
    "Novorzhev",
    "Novosil",
    "Novouralsk",
    "Novohopersk",
    "Novocherkassk",
    "Novyj Oskol",
    "Noginsk",
    "Juhnov",
    "Norilsk",
    "Nurlat",
    "Nytva",
    "Njurba",
    "Njagan",
    "Njandoma",
    "Obluche",
    "Obninsk",
    "Obojan",
    "Ob",
    "Ozersk",
    "Oktjabrskij",
    "Okulovka",
    "Olenegorsk",
    "Omutninsk",
    "Onega",
    "Orehovo-Zuevo",
    "Orlov",
    "Orsk",
    "Osa",
    "Osinniki",
    "Ostrogozhsk",
    "Otradnoe",
    "Otradnyj",
    "Oha",
    "Ohansk",
    "Ocher",
    "Pavlovsk",
    "Pavlovskij Posad",
    "Pallasovka",
    "Pevek",
    "Pervouralsk",
    "Perevoz",
    "Peresvet",
    "Perm",
    "Pestovo",
    "Petrov Val",
    "Petrovsk-Zabajkalskij",
    "Petrozavodsk",
    "Petuhovo",
    "Petushki",
    "Pechora",
    "Pikalevo",
    "Pionerskij",
    "Pitkjaranta",
    "Plavsk",
    "Plast",
    "Ples",
    "Povorino",
    "Podolsk",
    "Podporozhe",
    "Pokrov",
    "Pokrovsk",
    "Polevskoj",
    "Polysaevo",
    "Poljarnyj",
    "Pohvistnevo",
    "Pochep",
    "Pochinok",
    "Poshehone",
    "Pravdinsk",
    "Privolzhsk",
    "Primorsk",
    "Priozersk",
    "Prokopevsk",
    "Protvino",
    "Prohladnyj",
    "Pugachev",
    "Pudozh",
    "Puschino",
    "Pjatigorsk",
    "Rajchihinsk",
    "Reutov",
    "Rzhev",
    "Rodniki",
    "Roslavl",
    "Rossosh",
    "Roshal",
    "Rtischevo",
    "Rubtsovsk",
    "Ruzaevka",
    "Rylsk",
    "Salavat",
    "Salair",
    "Saransk",
    "Sasovo",
    "Satka",
    "Safonovo",
    "Stavropol",
    "Jurevets",
    "Svetlogorsk",
    "Svetlograd",
    "Svetlyj",
    "Svobodnyj",
    "Severobajkalsk",
    "Severomorsk",
    "Seversk",
    "Segezha",
    "Semenov",
    "Semikarakorsk",
    "Semiluki",
    "Sengilej",
    "Sergach",
    "Serdobsk",
    "Serov",
    "Serpuhov",
    "Sertolovo",
    "Sibaj",
    "Sim",
    "Skovorodino",
    "Slavgorod",
    "Slantsy",
    "Slobodskoj",
    "Snezhinsk",
    "Snezhnogorsk",
    "Sobinka",
    "Sovetsk",
    "Sovetskaja Gavan",
    "Sokol",
    "Soligalich",
    "Solikamsk",
    "Solvychegodsk",
    "Soltsy",
    "Sorsk",
    "Sosenskij",
    "Sosnovka",
    "Sosnovoborsk",
    "Sosnovyj Bor",
    "Sosnogorsk",
    "Spas-Klepiki",
    "Spassk-Dalnij",
    "Spassk-Rjazanskij",
    "Srednekolymsk",
    "Sredneuralsk",
    "Staraja Russa",
    "Staritsa",
    "Starodub",
    "Staryj Oskol",
    "Sterlitamak",
    "Strezhevoj",
    "Strunino",
    "Stupino",
    "Suvorov",
    "Sudogda",
    "Sunzha",
    "Surazh",
    "Surgut",
    "Surovikino",
    "Susuman",
    "Suhoj Log",
    "Syzran",
    "Syktyvkar",
    "Sysert",
    "Sychevka",
    "Tavda",
    "Tajga",
    "Taldom",
    "Talitsa",
    "Tarko-Sale",
    "Tarusa",
    "Tashtagol",
    "Tejkovo",
    "Terek",
    "Tetjushi",
    "Timashevsk",
    "Tihvin",
    "Tihoretsk",
    "Toguchin",
    "Toljatti",
    "Tommot",
    "Topki",
    "Salsk",
    "Tosno",
    "Totma",
    "Trubchevsk",
    "Tuapse",
    "Tujmazy",
    "Tulun",
    "Turan",
    "Turinsk",
    "Tynda",
    "Tyrnyauz",
    "Tjumen",
    "Uvarovo",
    "Uglich",
    "Udachnyj",
    "Udomlja",
    "Uzhur",
    "Uzlovaja",
    "Ulan-Ude",
    "Unecha",
    "Uraj",
    "Urjupinsk",
    "Usinsk",
    "Usman",
    "Usole",
    "Ust-Ilimsk",
    "Ust-Katav",
    "Ust-Kut",
    "Ustjuzhna",
    "Ufa",
    "Uhta",
    "Uchaly",
    "Ujar",
    "Frolovo",
    "Frjazino",
    "Furmanov",
    "Harabali",
    "Harovsk",
    "Hasavjurt",
    "Hvalynsk",
    "Hilok",
    "Hotkovo",
    "Tsivilsk",
    "Tsimljansk",
    "Chadan",
    "Chajkovskij",
    "Chapaevsk",
    "Chaplygin",
    "Chebarkul",
    "Cheboksary",
    "Chegem",
    "Cherdyn",
    "Cherepanovo",
    "Cherepovets",
    "Cherkessk",
    "Chermoz",
    "Chernogorsk",
    "Chernushka",
    "Chernjahovsk",
    "Chistopol",
    "Chkalovsk",
    "Chulym",
    "Chuhloma",
    "Shagonar",
    "Shadrinsk",
    "Shali",
    "Sharypovo",
    "Sharja",
    "Shatsk",
    "Shebekino",
    "Shilka",
    "Shihany",
    "Shumerlja",
    "Shumiha",
    "Shuja",
    "Schekino",
    "Schuche",
    "Elektrougli",
    "Elista",
    "Engels",
    "Ertil",
    "Jugorsk",
    "Juzha",
    "Juzhno-Suhokumsk",
    "Juzhnouralsk",
    "Jurga",
    "Jurev-Polskij",
    "Jurjuzan",
    "Jalutorovsk",
    "Janaul",
    "Jaransk",
    "Jasnogorsk",
    "Jahroma",
    "Anapa",
    "Astrahan",
    "Toropets",
    "Korjazhma",
    "Murino",
    "Novorossijsk",
    "Severodvinsk",
    "Golitsyno",
    "Kaluga",
    "Rasskazovo",
    "Belyj",
    "Zhigulevsk",
    "Belovo",
    "Krasnokamsk",
    "Bogoroditsk",
    "Innopolis",
    "Sovetskij",
    "Batajsk",
    "Mtsensk",
    "Shahty",
    "Vereja",
    "Dedovsk",
    "Zverevo",
    "Kamen-na-Obi",
    "Djatkovo",
    "Novovoronezh",
    "Aramil",
    "Borodino",
    "Gulkevichi",
    "Kinel",
    "Lebedjan",
    "Arkadak",
    "Kommunar",
    "Bolohovo",
    "Novouljanovsk",
    "Arsenev",
    "Tomari",
    "Krasnojarsk",
    "Dalnegorsk",
    "Partizansk",
    "Abdulino",
    "Ak-Dovurak",
    "Alzamaj",
    "Andreapol",
    "Armavir",
    "Ahtubinsk",
    "Balabanovo",
    "Belaja Kalitva",
    "Belorechensk",
    "Birobidzhan",
    "Birjusinsk",
    "Blagoveschensk",
    "Boguchar",
    "Bolshoj Kamen",
    "Bujnaksk",
    "Novosibirsk",
    "Verhnij Tagil",
    "Viljujsk",
    "Vladikavkaz",
    "Vorsma",
    "Vysokovsk",
    "Vjatskie Poljany",
    "Gorno-Altajsk",
    "Gorjachij Kljuch",
    "Gurevsk",
    "Degtjarsk",
    "Dzerzhinskij",
    "Dubovka",
    "Ekaterinburg",
    "Essentuki",
    "Zheleznogorsk-Ilimskij",
    "Zapadnaja Dvina",
    "Zelenogradsk",
    "Ivangorod",
    "Ipatovo",
    "Kalach-na-Donu",
    "Kamensk-Uralskij",
    "Kargopol",
    "Katav-Ivanovsk",
    "Kem",
    "Kizel",
    "Kireevsk",
    "Kirovo-Chepetsk",
    "Kodinsk",
    "Kozmodemjansk",
    "Konstantinovsk",
    "Shelehov",
    "Lytkarino",
    "Novouzensk",
    "Sajanogorsk",
    "Borisoglebsk",
    "Boksitogorsk",
    "Severo-Kurilsk",
    "Dagestanskie Ogni",
    "Kotovo",
    "Krasnoarmejsk",
    "Krasnouralsk",
    "Kuvshinovo",
    "Kurovskoe",
    "Labinsk",
    "Lahdenpohja",
    "Likino-Dulevo",
    "Losino-Petrovskij",
    "Lysva",
    "Ljudinovo",
    "Makarev",
    "Maloarhangelsk",
    "Mezhgore",
    "Mendeleevsk",
    "Mineralnye Vody",
    "Muravlenko",
    "Nazran",
    "Narjan-Mar",
    "Nesterov",
    "Nizhnevartovsk",
    "Nizhnjaja Salda",
    "Novoaleksandrovsk",
    "Novosokolniki",
    "Novyj Urengoj",
    "Njazepetrovsk",
    "Olekminsk",
    "Ostashkov",
    "Pavlovo",
    "Pervomajsk",
    "Pereslavl-Zalesskij",
    "Petropavlovsk-Kamchatskij",
    "Poljarnye Zori",
    "Primorsko-Ahtarsk",
    "Ramenskoe",
    "Rostov-na-Donu",
    "Salehard",
    "Sankt-Peterburg",
    "Svetogorsk",
    "Severouralsk",
    "Sergiev Posad",
    "Slavjansk-na-Kubani",
    "Sortavala",
    "Spas-Demensk",
    "Staraja Kupavna",
    "Suojarvi",
    "Suhinichi",
    "Sjasstroj",
    "Teberda",
    "Tobolsk",
    "Torzhok",
    "Trehgornyj",
    "Tjukalinsk",
    "Uren",
    "Ust-Dzheguta",
    "Fokino",
    "Hadyzhensk",
    "Tsiolkovskij",
    "Chekalin",
    "Chernogolovka",
    "Chudovo",
    "Shahunja",
    "Shimanovsk",
    "Elektrogorsk",
    "Juzhno-Sahalinsk",
    "Jaroslavl",
    "Zlatoust",
    "Novocheboksarsk",
  ];

  const paths = cities.map((city) => ({
    params: { city },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `http://92.63.178.153:5030/api/fullInfoDistrictByEndName/${params.city}`
  );
  const cityData = await res.json();

  return {
    props: {
      cityData,
    },
  };
}

export default CityPage;
