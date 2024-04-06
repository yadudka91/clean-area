import generalCneImg from "../src/assets/images/generalne4.jpg";
import repairCleaningImg from "../src/assets/images/remont4.jpg";
import maintenanceCleaningImg from "../src/assets/images/pidtrum4.jpg";
import windowCleaningImg from "../src/assets/images/vikna4.jpg";
import sofa from "../src/assets/images/divan3.jpg";
import mattress from "../src/assets/images/matrac3.jpg";
import chair from "../src/assets/images/krislo3.jpg";
import carpet from "../src/assets/images/kover3.jpg";
import carouselImg1 from "../src/assets/imagesCarousel/Carousel1.jpg";
import carouselImg2 from "../src/assets/imagesCarousel/Carousel2.jpg";
import carouselImg3 from "../src/assets/imagesCarousel/Carousel3.jpg";
import carouselImg4 from "../src/assets/imagesCarousel/Carousel4.jpg";
import carouselImg5 from "../src/assets/imagesCarousel/Carousel5.jpg";
import carouselImg6 from "../src/assets/imagesCarousel/Carousel6.jpg";
import carouselImg7 from "../src/assets/imagesCarousel/Carousel7.jpg";
import carouselImg8 from "../src/assets/imagesCarousel/Carousel8.jpg";
import iconHouse from "../src/assets/iconReviews/house.png";
import iconClean from "../src/assets/iconReviews/clean.png";
import imgReviews1 from "../src/assets/imgReviews/reviews1.jpg";
import imgReviews2 from "../src/assets/imgReviews/reviews2.jpg";
import imgReviews3 from "../src/assets/imgReviews/reviews3.jpg";
import imgReviews4 from "../src/assets/imgReviews/reviews4.jpg";
import imgReviews5 from "../src/assets/imgReviews/reviews5.jpg";
import imgReviews6 from "../src/assets/imgReviews/reviews6.jpg";
import imgReviews7 from "../src/assets/imgReviews/reviews7.jpg";
import imgReviews8 from "../src/assets/imgReviews/reviews8.jpg";

import imgBid from "../src/assets/imgWork/zajavka.png";
import imgCalc from "../src/assets/imgWork/calc.png";
import imgWork from "../src/assets/imgWork/work.png";
import imgPayment from "../src/assets/imgWork/oplata.png";
import callButtonPng from "../src/assets/other/telephone-call.png";

import instagramImg from "../src/assets/other/Instagram-Icon.png";
import facebookImg from "../src/assets/other/2021_Facebook_icon.svg.png";

import menu from "../src/assets/other/menu.png";
import closeImg from "../src/assets/images/close2.png";
import closeImg2 from "../src/assets/images/close3.png";
import instagramIcon from "../src/assets/images/Instagram-Icon.png";
import facebookIcon from "../src/assets/images/2021_Facebook_icon.svg.png";
import logo from "../src/assets/images/noroot.png";
import backgroundMain from "../src/assets/other/backgroundImg2.jpg";
import { rerenderEntireTree } from "./render";

const TELEGRAM_BOT_TOKEN = "7153986051:AAFNOCJEx5RNLUHNFImkBsG_rMMaWmXRh8g";
const TELEGRAM_CHAT_ID = "@TextFrontCle111";
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

let store = {
  servicesCard: [
    {
      id: 1,
      cardImg: generalCneImg,
      title: "Генеральне прибирання",
      service: {
        paragraph1: "Під час генерального прибирання кухні:",
        text1:
          "- очищаємо від жиру фасади та гарнітуру кухонних меблів;\n- від жиру очищаємо фартух, варильну поверхню, витяжку, духову шафу, мікрохвильову піч;\n- кухонну техніку миємо зовні;\n- миємо холодильник зовні та в середині;\n- очищаємо люстру та карниз від жирових забруднень;\n- миємо вікна;\n- протираємо всередині в тумбі де знаходиться сміттєва корзина;\n- змінюємо пакет для сміття;\n- знімаємо нижній кухонний карниз, пилососимо, миємо;\n- миємо міжкімнатні дері, підлогу та міжплиточні шви;\n- посуд до 10 хв. миємо безкоштовно;\n- виносимо сміття (до 5 кг).",
        paragraph2: "Під час генерального прибирання ванної кімнати:",
        text2:
          "- очищаємо від складних забруднень (водного нальоту, каменю, плісняви) ванну/душову кабіну;\n- миємо кахельну плитку на стінах (від низу до верху) та підлозі;\n- очищуємо вентиляційну решітку, витяжку;\n- чистимо, дезинфікуємо всю сантехніку (раковину, унітаз, біде);\n- миємо дзеркальні поверхні;\n- очищаємо від водного нальоту, каменю, змішувачі, натираємо їх до блиску;\n- відсуваємо пральну машину та миємо під нею;\n- миємо міжкімнатні дері, вимикачі, розетки.",
        paragraph3: "Під час генерального прибирання житлових кімнат:",
        text3:
          "- речі акуратно складаємо на горизонтальну поверхню;\n- знімаємо павутину зі стелі, стін;\n- пилососимо підлогу та килими;\n- від пилу та бруду очищаємо всі доступні поверхні (карнизи, міжкімнатні та вхідні двері, дверні ручки, вимикачі, розетки, фасади меблів, полички, підвіконня, люстри, плінтуса, підлога);\n- піднімаємо рухомі предмети та протираємо під ними (окрім великогабаритних меблів);\n- пилососимо м'які меблі та матраци;\n- очищуємо всі скляні та дзеркальні поверхні;\n- миємо кондиціонер зовні;\n- за допомогою парогенератора чистимо теплові радіатори;\n- змінюємо постіль (за бажанням замовника);\n- складаємо взуття та протираємо поличку;\n- миємо підлогу та протираємо плінтуси.",
      },
      price: `- від 80 грн за 1 м² (приміщення без меблів);\n- від 100 грн. за 1 м² (омебльоване приміщення).`,
    },

    {
      id: 2,
      cardImg: repairCleaningImg,
      title: "Прибирання після ремонту",
      service: {
        paragraph1: "",
        text1: `- очищаємо від будівельного пилу всі доступні горизонтальні та вертикальні поверхні;\n- проводимо сухе і вологе прибирання стін, стелі, карнизів, люстр, підвіконня, меблів (в тому числі і в середині), вентиляційних решіток, витяжок, міжкімнатних та вхідних дверей, вимикачів та розеток, теплових радіаторів, плінтусів, підлоги;\n- знімаємо плівку та миємо вікна;\n- пилососимо м'які меблі та матраци;\n- миємо ванну/душову кабіну та іншу сантехніку, чистимо кахельну плитку, міжплиточні шви на стінах на підлозі;\n- очищуємо всі скляні та дзеркальні поверхні;\n- видаляємо сліди клею, плями від будівельних сумішей (цемент, шпаклівка тощо), знімаємо скотч та видаляємо його сліди;\n- виносимо негабаритне сміття.`,
        paragraph2: "",
        text2: "",
        paragraph3: "",
        text3: "",
      },
      price: `від 80 грн. за 1 м².`,
    },
    {
      id: 3,
      cardImg: maintenanceCleaningImg,
      title: "Підтримуюче прибирання",
      service: {
        paragraph1: "Під час прибирання житлової кімнати:",
        text1:
          "- знімаємо павутину зі стелі та стін;\n- протираємо міжкімнатні та вхідні двері;\n- вологе прибирання всіх горизонтальних поверхонь на висоті власного росту та предметів, які на них знаходяться (крім дрібних та делікатних речей);\n- пилососимо підлогу та килими;\n- миємо підлогу та протираємо плінтуси;\n- змінюємо постіль (за бажанням замовника).",
        paragraph2: "Під час прибирання кухні:",
        text2:
          "- знімаємо павутину зі стелі та стін;\n- брудний посуд до 10 хв. миємо безкоштовно;\n- миємо раковину та змішувач;\n- протираємо стільницю та обідній стіл;\n- варильну поверхню очищаємо від жиру;\n- протираємо кухонний фартух, фасади та побутову техніку;\n- змінюємо пакет в сміттєвій корзині;\n- виносимо сміття до 5 кг.",
        paragraph3: "Під час прибирання ванної кімнати:",
        text3: `- протираємо від пилу фасади меблів;\n- миємо ванну/душову кабіну (без застосування засобів від водного нальоту, каменю, плісняви), унітаз та біде;\n- миємо раковину, змішувачі та натираємо їх до блиску;\n- очищуємо дзеркало;\n- пилососимо килимок та миємо підлогу.\n\nПослугу з підтримуючого прибирання надаємо лише клієнтам в яких проводилося генеральне прибирання!`,
      },
      price: `- 1-кімнатна квартира до 45 м² - 1100 грн;\n- 2-кімнатна квартира до 60 м² - 1400 грн;\n- 3-кімнатна квартира до 75 м² - 1700 грн;\n- 4-кімнатна квартира до 100 м² - 2000 грн;\n- будинок, квартира понад 100 м² - від  20 грн за 1 м², за домовленістю.`,
    },
    {
      id: 4,
      cardImg: windowCleaningImg,
      title: "Миття вікон",
      service: {
        paragraph1: "",
        text1: `- миття скляних поверхонь зовні та з середини;\n- очищення пластикової поверхні зовні та з середини;\n- очищення віконних пройомів.\n\nВажливо: поверхні де є ризик їх пошкодження не чистимо; чистимо лише доступні поверхні без демонтажу частин меблі чи техніки, не пересуваємо великогабаритні предмети.`,
        paragraph2: "",
        text2: "",
        paragraph3: "",
        text3: "",
      },
      price: `- від 130 грн за 1 м²;\n- від 170 грн за 1 м² (після ремонту).`,
    },
    {
      id: 5,
      cardImg: sofa,
      title: "Хімчистка диванів",
      service: {
        paragraph1: "",
        text1:
          "Хімчистка проводиться професійною технікою та сертифікованими, безпечними для людей і тварин засобами.",
        paragraph2: "",
        text2: "",
        paragraph3: "",
        text3: "",
      },
      price: `- 2-місний диван (1,5 м.) - 1000 грн;\n- 3-місний диван (2 м.) - 1350 грн;\n- 4-місний кутовий диван (2,5 м.) - 1600 грн;\n- 5-місний кутовий диван (3 м.) - 1950 грн;\n- розкладна частина дивана - 500 - 1000 грн;\n- диванні подушки від 100 грн/шт.\n\nПри наявність плям чорнила, крові, кави, тваринної сечі, забруднення "extra" +30% до вказаної вартості.`,
    },
    {
      id: 6,
      cardImg: mattress,
      title: "Хімчистка матраців",
      service: {
        paragraph1: "",
        text1:
          "Хімчистка проводиться професійною технікою та сертифікованими, безпечними для людей і тварин засобами",
        paragraph2: "",
        text2: "",
        paragraph3: "",
        text3: "",
      },
      price: `- матрац дитячий (60*120) - 500 грн;\n- матрац односпальний (80*200) - 1000 грн;\n- матрац "King size" (180*200) - 1200 грн;\n- узголів’я ліжка - 400 грн;\n- узголів’я та каркас ліжка - 750 грн.\n\nВартість вказана за хімчистку матраца з однієї сторони. Хімчистка з обох сторін +25% до вказаної вартості.`,
    },
    {
      id: 7,
      cardImg: chair,
      title: "Хімчистка крісел та стільців",
      service: {
        paragraph1: "",
        text1:
          "Хімчистка проводиться професійною технікою та сертифікованими, безпечними для людей і тварин засобами.",
        paragraph2: "",
        text2: "",
        paragraph3: "",
        text3: "",
      },
      price: `- стілець без спинки - 80 грн;\n- стілець із спинкою -150 грн;\n- офісне крісло - 250 грн;\n- крісло диванного типу - 800 грн;\n- банкетка – 450 грн;\n- пуф - 200 грн.`,
    },
    {
      id: 8,
      cardImg: carpet,
      title: "Хімчистка килимів",
      service: {
        paragraph1: "",
        text1: `Хімчистка проводиться професійною технікою та сертифікованими, безпечними для людей і тварин засобами.`,
        paragraph2: "",
        text2: "",
        paragraph3: "",
        text3: "",
      },
      price: `- ковролін - від 85 грн за 1 м²;\n- килим – 100-150 грн. за 1 м².\n\nПри наявність плям чорнила, крові, кави, тваринної сечі, забруднення "extra" +30% до вказаної вартості.`,
    },
  ],
  fullItem: {},
  showFullItem: false,
  carouselCard: [
    { id: 1, carouselImg: carouselImg1 },
    { id: 2, carouselImg: carouselImg2 },
    { id: 3, carouselImg: carouselImg3 },
    { id: 4, carouselImg: carouselImg4 },
    { id: 5, carouselImg: carouselImg5 },
    { id: 6, carouselImg: carouselImg6 },
    { id: 7, carouselImg: carouselImg7 },
    { id: 8, carouselImg: carouselImg8 },
  ],
  currentIndex: 0,
  reviews: [
    { id: 1, icon: iconHouse, title: "680+ прибраних осель" },
    {
      id: 2,
      icon: iconClean,
      title: "1920+ чистих диванів, крісел та матраців",
    },
  ],
  imgReviews: [
    { id: 1, imgReviews: imgReviews1 },
    { id: 2, imgReviews: imgReviews2 },
    { id: 3, imgReviews: imgReviews4 },
    { id: 4, imgReviews: imgReviews5 },
    { id: 5, imgReviews: imgReviews8 },
    { id: 6, imgReviews: imgReviews6 },
    { id: 7, imgReviews: imgReviews7 },
    { id: 8, imgReviews: imgReviews3 },
  ],
  work: [
    {
      id: 1,
      icon: imgBid,
      title: "Замовлення",
      text: "Залиште заявку в зручний для Вас спосіб",
    },
    // { id: 2, icon: imgVector, title: "", text: "" },
    {
      id: 3,
      icon: imgCalc,
      title: "Розрахунок",
      text: "Наш менеджер приїде в зручний для Вас час, зробить точний розрахунок вартості та узгодить дату прибирання",
    },
    // { id: 4, icon: imgVector, title: "", text: "" },
    {
      id: 5,
      icon: imgWork,
      title: "Прибирання",
      text: "Наші фахівці приїдуть до Вас на узгоджену дату, час та виконають замовлення",
    },
    // { id: 6, icon: imgVector, title: "", text: "" },
    {
      id: 7,
      icon: imgPayment,
      title: "Оплата",
      text: "Оплата проводиться лише після того, як Ви переконаєтеся, що все згідно Вашого замовлення виконано",
    },
  ],
  workItem: {
    send: "Відправити",
    ok: "",
    error: "",
  },
  otherImg: {
    callButton: callButtonPng,
    instagramIcon: instagramImg,
    facebookIcon: facebookImg,
    menu: menu,
    closeImg: closeImg,
    closeImg2: closeImg2,
    instagramIcon: instagramIcon,
    facebookIcon: facebookIcon,
    backgroundMain: backgroundMain,
  },
  header: {
    services: "Послуги",
    photo: "Фотогалерея",
    phone: "Телефон: +38 (099) 199-21-62",
    orderCleaning: "Залишити заявку",
    logo: logo,
    instagramIcon: instagramIcon,
    facebookIcon: facebookIcon,
  },
  headerBurger: {
    services: "",
    photo: "",
    phone: "",
    logo: "",
    instagramIcon: "",
    facebookIcon: "",
  },
  showHeaderBurger: false,
  question: [
    {
      q: `Від чого залежать розцінки на прибирання?`,
      a: `Ціна прибирання залежить від багатьох факторів, зокрима: \n- площа квартири, будинку; \n- вид послуги, який Ви замовили;\n- Ваші індивідуальні побажання.`,
    },
    {
      q: `Чи можна укласти договір на регулярне прибирання? Чи буде знижка?`,
      a: `Так, Ви можете укласти з нами договір і ми надамо Вам знижку, як постійному клієнту. Всі подробиці можете дізнатися за телефоном.`,
    },
    {
      q: `Чи є якісь виключення в прибиранні?`,
      a: `\n- поверхні, де є ризик їх пошкодження не чистимо; \n- не миємо стіни, стелю, декоративний камінь; \n- чистимо лише доступні поверхні (без демонтажу частин меблів чи техніки); \n- не пересуваємо великогабаритні предмети (ліжка, шафи, холодильники, дивани тощо), посуд не миємо; \n- звертатись до працівників із проханням виконати, те що не входить в пакет замовлених послуг заборонено; \n- хімічні засоби та розхідні матеріали використовуються тільки компанії.`,
    },

    {
      q: `Якщо ваш співробітник зламав що-небудь, хто несе відповідальність?`,
      a: `У нашій компанії працюють професіонали з багаторічним стажем. Можемо запевнити Вас, що подібних ситуацій не виникне. Якщо ж все-таки трапиться - ми гарантуємо відшкодування шкоди, заподіяної нашим співробітником.`,
    },

    {
      q: `Що робити, якщо після прибирання зникли цінні речі?`,
      a: `Можете не турбуватися. Перед прийомом на роботу всі співробітники проходять перевірку, які дорожать своєю роботою. Якщо все-таки подібна ситуація трапиться і Ви будете сумніватися в чесності нашого співробітника - зв'яжіться з нами і ми приймемо необхідні заходи.`,
    },
  ],
  accordion: null,
  openId: null,
};

export default store;

export let onShowItem = (item) => {
  store.fullItem = item;
  store.showFullItem = !store.showFullItem;

  rerenderEntireTree(store);
};

export let sliderRight = (index, images) => {
  store.currentIndex === images.length - 1
    ? (store.currentIndex = 0)
    : (store.currentIndex = index + 1);
  rerenderEntireTree(store);
};
export let sliderLeft = (index, images) => {
  store.currentIndex === 0
    ? (store.currentIndex = images.length - 1)
    : (store.currentIndex = index - 1);
  rerenderEntireTree(store);
};

export let onAccordion = (id) => {
  // store.accordion == null ? (store.accordion = id) : (store.accordion = null);
  if (id === store.accordion) store.accordion = null;
  else store.accordion = id;

  rerenderEntireTree(store);
};

export let onMobileMenu = (item) => {
  store.showHeaderBurger = !store.showHeaderBurger;
  store.headerBurger = item;

  rerenderEntireTree(store);
};

export let setCurrentIndex = (index) => {
  store.currentIndex = index;

  rerenderEntireTree(store);
};

export async function sendMessageTelegram(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const formDataObject = Object.fromEntries(formData.entries());
  console.log(formDataObject);

  const { name, phone, number, select } = Object.fromEntries(
    new FormData(form).entries()
  );
  const text = `Заявка від ${name}!\nТелефон: ${phone}\nПлоща: ${number}\nВид прибирання: ${select}`;

  try {
    store.workItem.ok = "";

    store.workItem.error = "";

    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
      }),
    });

    if (response.ok) {
      store.workItem.ok =
        "Замовлення відправлено, найблищим часом Вам зателефонують.";

      form.reset();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
    store.workItem.error =
      "Сталася помилка. Попробуйте повторити через декілька хвилин";
  } finally {
    store.workItem.send = "Відправити";
  }
  rerenderEntireTree(store);
}
