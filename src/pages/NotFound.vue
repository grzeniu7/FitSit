<template>
  <page-container :page-title="pageTitle" :page-content="pageContent">
    <p>
      {{ additionalContent }}
      <base-link
        url-adress="https://www.facebook.com/Projekt-FitSit-108804754632681/"
        text="Facebooku!"
      ></base-link>
    </p>
  </page-container>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: "UPSIKI! Coś nie pykło :(",
      pageContent:
        "Wystąpił błąd w trakcie ładowania strony. Upewnij się, że podany został prawidłowy adres strony i spróbuj jeszcze raz! Czekamy na Ciebie! :)",
      additionalContent: "Możesz też odwiedzić nasz fanpage na",
    };
  },
};
</script>
