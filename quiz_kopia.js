/*eslint-env browser*/
/*jslint devel: true */
/* eslint-disable no-console */
/* eslint-env es6 */
/* eslint-disable no-console */
/* exported myFunction */

window.onload = start;

const Pytania = 
[
    {
        tresc_Pytania: "Barok charakteryzował się:",
        odp_A: "Kult strachu,asceza,mroczność",
        odp_B: "lekkość,czyste barwy,nawiązanie do antyku",
        odp_C: "Przepych,kontrastowość,mistycyzm",
        odp_D: "Minimalizm,prostota,symetria",
        prawidlowa_odp: "Przepych,kontrastowość,mistycyzm",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
    {
        tresc_Pytania: "Letnie igrzyska olimpijskie odbędą się w: ",
        odp_A: "Madrycie",
        odp_B: "Tokio",
        odp_C: "Stambule",
        odp_D: "Londynie",
        prawidlowa_odp: "Tokio",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
    {
        tresc_Pytania: "Która rzeka nie płynie przez Ameryke południową:",
        odp_A: "Jurua",
        odp_B: "Parana",
        odp_C: "Orinoko",
        odp_D: "Amur",
        prawidlowa_odp: "Amur",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
    {
        tresc_Pytania: "Gromada gadów to inaczej",
        odp_A: "Insecta",
        odp_B: "Reptilia",
        odp_C: "Amphibilia",
        odp_D: "Arachnida",
        prawidlowa_odp: "Reptilia",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
    {
        tresc_Pytania: "Wskaż imiesłów przymiotnikowy czynny",
        odp_A: "Pisać",
        odp_B: "Piszący",
        odp_C: "Napisany",
        odp_D: "Napisawszy",
        prawidlowa_odp: "Piszący",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
    {
        tresc_Pytania: "Która substancja nie jest materiałem wybuchowym:",
        odp_A: "Nitrogliceryna",
        odp_B: "Dynamit",
        odp_C: "Cyjanowodór",
        odp_D: "Karbonit",
        prawidlowa_odp: "Cyjanowodór",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
        
    },
    {
        tresc_Pytania: "Która z rzek była związana z cywilizacją Mezopotami:",
        odp_A: "Nil",
        odp_B: "Jangcy",
        odp_C: "Eufrat",
        odp_D: "Tybr",
        prawidlowa_odp: "Eufrat",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
    {
        tresc_Pytania: "Maria Skłodowska Curie odkryła dwa pierwiastki chemiczne, jeden z nich to:",
        odp_A: "Rubid",
        odp_B: "Rad",
        odp_C: "Ruten",
        odp_D: "Kadm",
        prawidlowa_odp: "Rad",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
    {
        tresc_Pytania: "Cechą bajki jako utworu literackiego jest:",
        odp_A: "Eufemizm",
        odp_B: "Animizacja",
        odp_C: "Groteska",
        odp_D: "Alegoryczność",
        prawidlowa_odp: "Alegoryczność",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
    {
        tresc_Pytania: "Największe miasto Kataloni to:",
        odp_A: "Sewilla",
        odp_B: "Madryt",
        odp_C: "Barcelona",
        odp_D: "Walencia",
        prawidlowa_odp: "Barcelona",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
    {
        tresc_Pytania: "Monolog na Mount Blanc znajdzemy w utworze:",
        odp_A: "Kordian",
        odp_B: "Balladyna",
        odp_C: "Dziady cz.3",
        odp_D: "Konrad Wellenrod",
        prawidlowa_odp: "Kordian",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
    //-------------------------------------------------
        {
        tresc_Pytania: "Waluta Japoni to:",
        odp_A: "Dolar japoński",
        odp_B: "Juan",
        odp_C: "Peso",
        odp_D: "Jen",
        prawidlowa_odp: "Jen",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
            {
        tresc_Pytania: "U wybrzeży którego kontynentu leży Madagaskar:",
        odp_A: "Afryki",
        odp_B: "Ameryki Południowej",
        odp_C: "Azji",
        odp_D: "Ameryki Północnej",
        prawidlowa_odp: "Jen",
        odp_uzytkownika: "Afryki",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
            {
        tresc_Pytania: "W którym roku Amerykanie wylądowali na księżycu:",
        odp_A: "1957",
        odp_B: "1961",
        odp_C: "1966",
        odp_D: "1969",
        prawidlowa_odp: "1969",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
            {
        tresc_Pytania: "W którym państwie leży Walencja:",
        odp_A: "Włochy",
        odp_B: "Francja",
        odp_C: "Hiszpania",
        odp_D: "Argentyna",
        prawidlowa_odp: "Hiszpania",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
            {
        tresc_Pytania: "W której książce pojawia się postać Wolanda:",
        odp_A: "Wojna i pokój",
        odp_B: "Zbrodnia i kara",
        odp_C: "Bracia Karamazow",
        odp_D: "Mistrz i Małgorzata",
        prawidlowa_odp: "Mistrz i Małgorzata",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
            {
        tresc_Pytania: "Chorobliwy strach przed pająkami to: ",
        odp_A: "Antopofobia",
        odp_B: "Agorafobia",
        odp_C: "Androfobia",
        odp_D: "Arachnofobia",
        prawidlowa_odp: "Arachnofobia",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
            {
        tresc_Pytania: "Wskaż największą wartość:",
        odp_A: "40% z 4",
        odp_B: "30% z 5",
        odp_C: "20% z 6",
        odp_D: "10% z 11",  
        prawidlowa_odp: "40% z 4",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
            {
        tresc_Pytania: "Jestem zamężną kobietą i nigdy nie miałam romansu. Syn Pawła jest ojcem mojej córki. Kim jest dla mnie Paweł?",
        odp_A: "Teściem",
        odp_B: "Dziadkiem",
        odp_C: "Bratem",
        odp_D: "Ojcem",
        prawidlowa_odp: "Teściem",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
            {
        tresc_Pytania: "Które słowo najmniej pasuje do pozostałych?",
        odp_A: "Bariera",
        odp_B: "Blokada",
        odp_C: "Granica",
        odp_D: "Zapora",
        prawidlowa_odp: "Granica",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
    {
        tresc_Pytania: "Jeżeli mnie masz nie podzielisz się ze mną nikim. Jeśli się podzielisz to już mnie nie masz.Czym jestem?",
        odp_A: "Sekretem",
        odp_B: "Sławą",
        odp_C: "Pieniędzmi",
        odp_D: "Pomysłem",
        prawidlowa_odp: "Sekretem",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
            {
        tresc_Pytania: "Jeżeli 5 kotów łapie 5 myszy w 5 minut,ile kotów potrzeba, żeby złapać 100 myszy w 100 minut?",
        odp_A: "20",
        odp_B: "100",
        odp_C: "1",
        odp_D: "5",
        prawidlowa_odp: "5",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
    {
        tresc_Pytania: "W której odpowiedzi nie ukrywa się ptak?",
        odp_A: "RZAMEC",
        odp_B: "ŁUKAKUK",
        odp_C: "ŻABNAT",
        odp_D: "KALIPERCZ",
        prawidlowa_odp: "RZAMEC",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
    {
        tresc_Pytania: "Przedstawienie w teatrze może odbywać się najczęściej co 3 dni. Ile maksymalnie przedstawień może odbyć się w okresie 8 dni:",
        odp_A: "1",
        odp_B: "2",
        odp_C: "3",
        odp_D: "4",
        prawidlowa_odp: "3",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
    {
        tresc_Pytania: "Która odpowiedz nie pasuje dla pozostalych?",
        odp_A: "Encyklopedia",
        odp_B: "Książka",
        odp_C: "Zeszyt",
        odp_D: "Gazeta",
        prawidlowa_odp: "Zeszyt",
        odp_uzytkownika: "",
        div_odpA: undefined,
        div_odpB: undefined,
        div_odpC: undefined,
        div_odpD: undefined
    },
]

let kolejnosc_pytan = [];

function time()
{
    const Time = document.querySelector('#time');
    let dzisiaj = new Date(),
        godzina = dzisiaj.getHours(),
        minuta = dzisiaj.getMinutes(),
        dzien = dzisiaj.getDay(),
        miesiac = dzisiaj.getMonth(),
        rok = dzisiaj.getFullYear(),
        sekunda = dzisiaj.getSeconds();
    
    if(sekunda < 10)
        sekunda = "0" + sekunda;
    if(minuta < 10)
        minuta = "0" + minuta;
    if(godzina < 10)
        godzina = "0" + godzina;
    if(dzien < 10)
        dzien = "0" + dzien;
    if(miesiac < 10)
        miesiac = "0" + miesiac;
    
    Time.innerHTML = godzina + ":" + minuta + ":" +sekunda + "</br>" + dzien + "." + miesiac + "." + rok;
}


function losuj_liczbe(min,max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function pokaz_quiz()
{   
    const uchwyt_Tresc_Pytania = document.querySelectorAll('.tresc_p'),
          uchwyt_Odpowiedz_a_p = document.querySelectorAll('.odpowiedz_a_p'),
          uchwyt_Odpowiedz_d_p = document.querySelectorAll('.odpowiedz_d_p'),
          uchwyt_Odpowiedz_b_p = document.querySelectorAll('.odpowiedz_b_p'),
          uchwyt_Odpowiedz_c_p = document.querySelectorAll('.odpowiedz_c_p'),
          uchwyt_Sprawdz_quiz = document.querySelector('#sprawdz_quiz'),
          uchwyt_Container = document.querySelector('#container'),
          uchwyt_Pytanie = document.querySelectorAll('.pytanie'),
          uchwyt_start_button = document.querySelector('#rozpocznij_rozgrywke'),
          tablica_wylosowanych_liczb = [];
    
    uchwyt_start_button.style.display = "none";
    uchwyt_Sprawdz_quiz.style.display = "block";
    uchwyt_Container.style.height = "4500px";
    
    
    for(let i=0; i<uchwyt_Pytanie.length; ++i)
    {
        let czy_sie_powtarza,
            nowa_liczba;
        do
        {   
            czy_sie_powtarza = false;
            nowa_liczba = losuj_liczbe(0,Pytania.length-1);
            for(let j=0; j<tablica_wylosowanych_liczb.length; ++j)
            {
                if(nowa_liczba == tablica_wylosowanych_liczb[j])
                    czy_sie_powtarza = true;
            }
        }
        while(czy_sie_powtarza == true)
        
        tablica_wylosowanych_liczb.push(nowa_liczba);
        kolejnosc_pytan.push(nowa_liczba);
        
        uchwyt_Pytanie[i].style.display = "block";
        uchwyt_Tresc_Pytania[i].innerHTML = Pytania[tablica_wylosowanych_liczb[i]].tresc_Pytania;
        uchwyt_Odpowiedz_a_p[i].innerHTML = Pytania[tablica_wylosowanych_liczb[i]].odp_A;
        uchwyt_Odpowiedz_b_p[i].innerHTML = Pytania[tablica_wylosowanych_liczb[i]].odp_B;
        uchwyt_Odpowiedz_c_p[i].innerHTML = Pytania[tablica_wylosowanych_liczb[i]].odp_C;
        uchwyt_Odpowiedz_d_p[i].innerHTML = Pytania[tablica_wylosowanych_liczb[i]].odp_D;
    }
    
    rozgrywka(tablica_wylosowanych_liczb);
}

function zaznacz(Pytania,kolejność,i,a_b_c_d)
{
    Pytania[kolejność[i]].div_odpA.style.backgroundColor = "darkgrey";
    Pytania[kolejność[i]].div_odpB.style.backgroundColor = "darkgrey";
    Pytania[kolejność[i]].div_odpC.style.backgroundColor = "darkgrey";
    Pytania[kolejność[i]].div_odpD.style.backgroundColor = "darkgrey";
    Pytania[kolejność[i]].odp_uzytkownika = "";
    
    switch(a_b_c_d)
        {
            case "A":
                {
                    Pytania[kolejność[i]].div_odpA.style.backgroundColor = "orangered";
                    Pytania[kolejność[i]].odp_uzytkownika = Pytania[kolejność[i]].odp_A;
                }
                break;
            case "B":
                {
                    Pytania[kolejność[i]].div_odpB.style.backgroundColor = "orangered";
                    Pytania[kolejność[i]].odp_uzytkownika = Pytania[kolejność[i]].odp_B;
                }
                break;
            case "C":
                {
                    Pytania[kolejność[i]].div_odpC.style.backgroundColor = "orangered";
                    Pytania[kolejność[i]].odp_uzytkownika = Pytania[kolejność[i]].odp_C;
                }
                break;
            case "D":
                {
                    Pytania[kolejność[i]].div_odpD.style.backgroundColor = "orangered";
                    Pytania[kolejność[i]].odp_uzytkownika = Pytania[kolejność[i]].odp_D;
                }
                break;
        }
}


function start()
{
    setInterval(time,1000);
    
    const start_button = document.querySelector('#rozpocznij_rozgrywke'),
          check_button = document.querySelector('#sprawdz_quiz');
        
    start_button.addEventListener('click',pokaz_quiz);
    check_button.addEventListener('click',sprawdz_quiz);
}




function rozgrywka(kolejność)
{
    const OdpowiedziA = document.querySelectorAll('.odpowiedz_a'),
          OdpowiedziB = document.querySelectorAll('.odpowiedz_b'),
          OdpowiedziC = document.querySelectorAll('.odpowiedz_c'),
          OdpowiedziD = document.querySelectorAll('.odpowiedz_d');    
    
    
    //PRZYPISANIE DO OBIEKTÓW ODPOWIEDNICH DIVOW W HTML
    for(let i=0; i<10; ++i)
    {
        Pytania[kolejność[i]].div_odpA = OdpowiedziA[i];
        Pytania[kolejność[i]].div_odpB = OdpowiedziB[i];
        Pytania[kolejność[i]].div_odpC = OdpowiedziC[i];
        Pytania[kolejność[i]].div_odpD = OdpowiedziD[i];
    }
    
    for(let i=0; i<10; ++i)
    {
        (Pytania[kolejność[i]].div_odpA).addEventListener('click',function(){
            zaznacz(Pytania,kolejność,i,"A");
            
        });
        
        (Pytania[kolejność[i]].div_odpB).addEventListener('click',function(){
            zaznacz(Pytania,kolejność,i,"B");
        });
        
        (Pytania[kolejność[i]].div_odpC).addEventListener('click',function(){
            zaznacz(Pytania,kolejność,i,"C");
        });
        
        (Pytania[kolejność[i]].div_odpD).addEventListener('click',function(){
            zaznacz(Pytania,kolejność,i,"D");
        })
    }
}


function sprawdz_quiz()
{    
    const Sprawdzenie_odpowiedzi = document.querySelectorAll('.sprawdzenie_odpowiedzi'),
           uchwyt_Sprawdz_quiz = document.querySelector('#div_sprawdz_quiz'),
          uchwyt_Procentowy_wynik = document.querySelector('#procentowy_wynik'),
          uchwyt_zagraj_jeszcze_raz = document.querySelector('#zagraj_jeszcze_raz');
    let  punkty = 0;

    
    for(let i=0; i<10; ++i)
    {
        Sprawdzenie_odpowiedzi[i].style.display = "block";
        if(Pytania[kolejnosc_pytan[i]].odp_uzytkownika == Pytania[kolejnosc_pytan[i]].prawidlowa_odp)
        {
            Sprawdzenie_odpowiedzi[i].innerHTML = "Podałeś poprawną odpowiedz!";
            Sprawdzenie_odpowiedzi[i].style.color = "green";
            ++punkty;
        }
        else
        {
            Sprawdzenie_odpowiedzi[i].innerHTML = "Podałeś błędną odpowiedz.  Poprawna to:   " + Pytania[kolejnosc_pytan[i]].prawidlowa_odp;
            Sprawdzenie_odpowiedzi[i].style.color = "red";
        }
    }
    
    uchwyt_Sprawdz_quiz.style.display = "none";
    uchwyt_Procentowy_wynik.style.display = "block";
    uchwyt_Procentowy_wynik.innerHTML = "Twój wynik to: " + (punkty/10)*100 + "%";
    uchwyt_zagraj_jeszcze_raz.style.display = "block";
    uchwyt_zagraj_jeszcze_raz.addEventListener('click',function(){
        location.href = "quiz.html";
    });
}










