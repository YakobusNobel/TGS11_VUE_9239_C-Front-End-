<template>
<v-container mb-4>
        <v-card pa-2 color="">
            <v-container style="margin-top:10%" >
                <v-layout>
                    <v-flex>
                        <v-card color="blue">
                        <h1 style="margin-top:2%">LOGIN</h1>
                        </v-card>
                        <v-text-field placeholder="Email" v-model="user.email"></v-text-field>
                        <v-text-field placeholder="Password" type="password" v-model="user.password"></v-text-field>
                        <v-btn depressed dark rounded style="text-transform: none !important;" color="green" @click="login()">
                            LOGIN
                        </v-btn>
                        <br>
                        <v-card-text>Doesn't Have Account?</v-card-text>
                        <v-btn>SIGN UP HERE!!!</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-container>
</template>
<script>
export default {
  data() {
         return {
             snackbar: false,
             load: false,
             user: {
                 email: '',
                 password:''
             },
             users: new FormData,
             errors: '',
             updatedId: '',
             text: '',
             color: null,
             load: false,
         }
     },
     methods: {
        login() {
            var url = this.$apiUrl + "/Auth";
            this.users = new FormData();
            this.users.append("email", this.user.email);
            this.users.append("password", this.user.password);
            this.$http.post(url, this.users).then(response => {
                if (response.data.token) {
                    localStorage.setItem("token", response.data.token);
                    this.$router.push('/branches');
                } else {
                    this.snackbar = true;
                    this.text = "Invalid Username or Password!";
                    this.color = "red";
                    this.load = false;
                }
            });
        }
        }
        }
</script>