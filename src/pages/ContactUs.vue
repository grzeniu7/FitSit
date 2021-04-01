<template>
  <page-container :page-title="pageTitle" :page-content="pageContent">
    <p>
      <base-link
        url-adress="mailto:fitsit.example.com"
        text="Napisz do nas na email.com"
      ></base-link>
      {{ additionalContent }}
      <base-link
        url-adress="https://www.facebook.com/messages/t/108804754632681"
        text="napisz do nas na Facebooku!"
      ></base-link>
    </p>
  </page-container>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: "Odezwij się do nas!",
      pageContent:
        "Uwielbiamy poznawać nowych ludzi, ich doświadczenia i spojrzenie na różne przyziemne sprawy. Może i Ty chciałbyś się do nas odezwać? :) ",
      additionalContent: "lub po prostu",
    };
  },
};
</script>

<style lang="scss" scoped>
.link:hover {
  transform: translateX(-2px);
}

p {
  margin: 0;
}
</style>
