<template>
  <router-view></router-view>
</template>

<style>
.Form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  min-height: 100vh;
  background-color: whitesmoke;
}

.link {
  text-decoration: none;
}

.nav {
  display: none;
}

#imageSection {
  display: none;
}

#uploadSection {
  display: none;
}

#camera-container {
  width: 100%;
  text-align: center;
}
#camera {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#capture-button {
  margin-top: 10px;
  cursor: pointer;
}

input {
  min-width: 450px;
}

#validateMsg {
  display: none;
}

#message {
  display: none;
}

.passwordContainer {
  position: relative;
}

.mb-3 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.passwordToggle {
  position: absolute;
  top: 74%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

#storedImage {
  display: none;
  margin: 20px;
}

@media screen and (max-width: 400px) {
  input {
    min-width: 300px;
  }
}
</style>
