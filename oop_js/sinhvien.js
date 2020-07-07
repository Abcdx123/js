function sinhvien(id, ten, tuoi) {
    this.id = id;
    this.ten = ten;
    this.tuoi = tuoi;

    this.tostring = function() {
        return this.id + " " + this.ten + " " + this.tuoi;
    }
}

var sv1 = new sinhvien('12t', 'le nguyen', 17);
alert(sv1.id);
alert(sv1.tostring());