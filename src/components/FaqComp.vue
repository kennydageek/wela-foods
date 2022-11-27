<template>
  <div>
    <p class="heading">Frequently Asked Questions</p>
    <v-expansion-panels class="panel-wrapper">
      <v-expansion-panel v-for="(faq, i) in faqs" :key="i" class="item-div">
        <v-expansion-panel-header class="header" @click="accordion(faq.id)">
          {{ faq.heading }}
          <template v-slot:actions>
            <img
              v-if="faq.expand === false"
              src="../assets/images/icons/expand.svg"
              alt=""
            />
            <img
              v-if="faq.expand === true"
              src="../assets/images/icons/minimize.svg"
              alt=""
            />
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="panel-content">
          {{ faq.content }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          id: 1,
          heading: 'What is Wela?',
          content:
            'Wela is is placeholder text commonly used in the graphic, print, and publishing industries for previewing and text commonly used in the graphic, visual mockups.',
          expand: false,
        },

        {
          id: 2,
          heading: 'How does it work?',
          content:
            'Wela is is placeholder text commonly used in the graphic, print, and publishing industries for previewing and text commonly used in the graphic, visual mockups.',
          expand: false,
        },
        {
          id: 3,
          heading: 'How do I get the ingredients?',
          content:
            'Wela is is placeholder text commonly used in the graphic, print, and publishing industries for previewing and text commonly used in the graphic, visual mockups.',
          expand: false,
        },
        {
          id: 4,
          heading: 'Can I add my family to my wela plans',
          content:
            'Wela is is placeholder text commonly used in the graphic, print, and publishing industries for previewing and text commonly used in the graphic, visual mockups.',
          expand: false,
        },
      ],
    };
  },

  methods: {
    accordion(id) {
      this.faqs.filter((faq) => {
        if (faq.id === id) {
          faq.expand = !faq.expand;
        }
      });
    },
  },
};
</script>

<style scoped>
.heading {
  font-family: 'neue machina', serif;
  font-size: 5rem;
  line-height: 6rem;
  font-weight: 800;
  margin-bottom: 10rem;
}

.panel-content {
  border-radius: 0;
}

.item-div {
  background-color: var(--bg-color) !important;
}
.item-div::before,
.item-div::after {
  box-shadow: none;
  border-top: none;
}

.header {
  font-weight: 800;
  font-family: 'neue machina';
  font-size: 2rem;
  color: #0b0c0e;
}

.panel-content {
  font-size: 2rem;
  color: #575252;
}

img {
  height: 2.3rem;
  width: 2.3rem;
}
</style>
