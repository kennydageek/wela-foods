<template>
  <div>
    <h1 class="heading">Loved and used by individuals couples, & families</h1>
    <v-row class="metric-row">
      <v-col cols="3" class="first-col">
        <div class="info-box">
          <div class="avatar">
            <p class="avatar__text">AM</p>
          </div>

          <div class="content">
            <p class="content__heading">Arlene McCoy</p>
            <p class="footer">Student</p>
          </div>
        </div>
      </v-col>
      <v-col cols="2" class="second-col">
        <div class="image">
          <img src="../assets/images/photos/food-1.svg" alt="" />
        </div>
        <div class="second-col__content">
          <p class="second-col__heading">
            Food <br />
            Resource
          </p>
          <p class="second-col__title">Over</p>
          <p class="second-col__num">70k</p>
        </div>
      </v-col>
      <v-col cols="3" class="third-col"> </v-col>
      <v-col cols="3" class="fourth-col">
        <div class="top">
          <div class="total-users">
            <p class="second-col__heading">
              Total <br />
              Users
            </p>
            <p class="second-col__title">Over</p>
            <p class="second-col__num">610k</p>
          </div>

          <div class="total-chefs">
            <p class="second-col__heading">
              Used by<br />
              Chefs
            </p>
            <!-- <p class="second-col__title">Over</p> -->
            <p class="second-col__num second-col__num--mt">2.5k</p>
          </div>
        </div>
        <div class="bottom">
          <div class="info-box info-box--large">
            <div class="content">
              <p class="content__heading content__heading--small">
                Learn cooking with step by step tutorial videos
              </p>
              <p class="footer footer--small">Novice to expert</p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.heading {
  font-family: 'neue machina';
  font-weight: 800;
  font-size: 6rem;
  line-height: 7rem;
  text-align: center;
  width: 80%;
  margin: 0 auto 8rem;
}

.metric-row {
  justify-content: space-between;
}
.col {
  padding: 0 !important;
}

.first-col {
  position: relative;
  background-image: url('../assets/images/photos/Arlene.jpg');
  background-size: cover;
  /* padding: 0 1.2rem; */
}

.first-col img {
  width: 100%;
  /* height: 60rem; */
  object-fit: cover;
  border-radius: 1.5rem;
}

.info-box {
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  display: flex;
  padding: 1.2rem 1.8rem;
  background-color: #fff;
  border-radius: 1rem;
  width: 85%;
}

.info-box--large {
  width: 90%;
  left: 1rem;
  bottom: 1rem;
  padding-left: 0.5rem;
}

.avatar {
  position: relative;
  align-self: center;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  background-color: var(--color-accent);
  margin-right: 2rem;
  color: #fff;
  font-weight: 600;
}

.avatar__text {
  margin-bottom: 0;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content {
  align-self: center;
}

.content__heading {
  font-family: 'neue Machina';
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0;
  /* line-height: 0; */
}

.content__heading--small {
  font-size: 1rem;
}

.footer {
  margin-bottom: 0;
}

.footer--small {
  font-size: 1rem;
}

.second-col {
  /* background: red; */
}

.image {
  padding: 0;
  margin: 0 auto;
}

.image img {
  display: block;
  margin: 0 auto;
  width: 100%;
}

.second-col__content {
  padding: 2.7rem 2rem;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 0;
  width: 100%;
  /* height: 50%; */
  border-radius: 1.5rem;
  background: #ede5fc;
}

.second-col__heading {
  font-family: 'neue machina';
  font-weight: 800;
  font-size: 2rem;
  line-height: 2.5rem;
  /* margin-bottom: 5rem; */
}

.second-col__title {
  margin-top: 5rem;
  margin-bottom: 0;
  font-weight: 600;
  font-size: 2rem;
}

.second-col__num {
  font-size: 4rem;
  font-family: 'neue machina';
}

.second-col__num--mt {
  margin-top: 8rem;
}

.third-col {
  /* height: 100%; */
  /* padding: 0 2rem; */
  background-image: url('../assets/images/photos/food-2.jpg');
  background-size: cover;
  border-radius: 1.5rem;
  background-position: center;
  margin-right: 2rem;
}

.fourth-col {
  /* background: red; */
}

.top {
  display: flex;
  justify-content: space-between;
  height: 48%;
  margin-bottom: 2rem;
  /* background: red; */
}

.total-users {
  background: #ffdba8;
  border-radius: 1.5rem;
  padding: 2.7rem;
  width: 48%;
}

.total-chefs {
  background: #fff;
  border-radius: 1.5rem;
  padding: 2.7rem;
  width: 48%;
}

.bottom {
  position: relative;
  height: 48%;
  background-image: url('../assets/images/photos/food-3.jpg');
  background-size: cover;
}
</style>
