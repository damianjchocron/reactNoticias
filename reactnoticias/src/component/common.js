
class Common {
    FechaActualISO() {
        var d = new Date();
        var month = this.ConvertirMesDia(d.getMonth(), 1);
        var date = this.ConvertirMesDia(d.getDate());
        return d.getFullYear().toString() + month + date;
    }

    ConvertirMesDia(value, uno = 0) {
        if (value >= 0 && value <= 8) value = "0" + (value + uno).toString();
        return value;
    }

}

export default Common;