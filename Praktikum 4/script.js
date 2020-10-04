        function changeLineStyle() {
            document.getElementById("cLine").className = "MakeRed";
        }

        var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet ultrices iaculis.";
        function ForLoop(iteration) {
            for (i = 0; i < iteration; i++) {
                document.getElementById("oResult").innerHTML += str + "<br />";
            }
        }

        var hobbies = [];

        function AddHobby(pHobby) {
            if (hobbies.length == 5) {
                alert("You have reach maximum possible hobbies!");
            }
            else if (hobbies.length < 5 && pHobby.length < 3) {
                alert("Please type correct hobby!");
            }
            else {
                hobbies.push(pHobby);
                document.getElementById("iHobby").value = "";
                document.getElementById("iHobby").focus();
            }
        }

        function InLoop() {
            var item;
            for (item of hobbies) {
                document.getElementById("oResult").innerHTML += item + "<br />";
            }
        }

        var Saya;

        function Person(pEmail, pNIM, pNama) {
            this.Email = pEmail;
            this.NIM = pNIM;
            this.Nama = pNama;
            this.ValidasiData = function () {
                if ((this.Email != "") && (this.NIM != "") && (this.Nama != "")) {
                    return "OK";
                } else {
                    return "NG";
                }
            }
        }

        function CreateObject(pEmail, pNIM, pNama) {
            Saya = new Person(pEmail, pNIM, pNama);
        }

        function LoadObject() {
            document.getElementById("iPerson").value =
                "Email: " + Saya.Email + " " +
                "NIM: " + Saya.NIM + " " +
                "Nama: " + Saya.Nama + " " +
                "Validasi: " + Saya.ValidasiData();
        }

        