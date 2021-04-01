<template>
  <page-container :page-title="pageTitle" :page-content="pageContent"
    ><base-link
      url-adress="https://www.facebook.com/Projekt-FitSit-108804754632681/"
      text="„FitSit”"
    ></base-link>
    {{ additionalContent }}
    <div class="center">
      <router-link to="/" class="link">
        Rozgość się na naszej stronie i pozostań FitSit</router-link
      >
    </div>
  </page-container>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: "FitSit - krótko o naszym maleństwie :) ",
      pageContent:
        "Siedzący tryb życia to domena populacji XXI w. Obecnie z powodu pandemii Covid-19 ludzie zmuszeni są pracować zdalnie - w domu przy komputerze. Dla wielu osób jest to nowa sytuacja, w ramach której nie mają wypracowanych zdrowych nawyków dbania o swoje zdrowie. Zła pozycja siedzenia w trakcie pracy, brak przerw, to przykłady złych nawyków, z którymi trzeba walczyć. Najbardziej obciążony jest nasz kręgosłup, który jest podporą dla całego organizmu. Wpływa na poprawną posturę, co z kolei przekłada się na właściwą pracę stawów. Siedząca pozycja osłabia mięśnie, które są anatomicznie przystosowane do ruchu i najlepiej, gdy są systematycznie pobudzane do działania. Projekt FitSit polega na promowaniu zdrowego trybu pracy przy komputerze. Jest kierowany do osób dopiero wchodzących w dorosłe życie, które zdrowe nawyki będą mogli kultywować przez wiele lat. Nasza strona internetowa to seria artykułów i filmów omawiających konsekwencje, jakie wynikają z nieprzestrzegania zdrowych nawyków pracy przy komputerze. Pragniemy przede wszystkim promować dbanie o kulturę pracy zdalnej.Oprócz strony WWW znajdziecie nas na Facebooku - ",
      additionalContent:
        ", na którym planujemy (oprócz zamieszczania ciekawych postów) organizować konkursy, w których nagrodami będą m.in. specjalistyczne podkładki pod mysz.",
    };
  },
};
</script>

<style lang="scss" scoped>
.center {
  text-align: center;
  padding: 1rem;
}
</style>
