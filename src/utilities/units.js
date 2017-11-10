module.exports = {

    checkPhoneNumber(num) {
        let arr = num.split("")
          if (arr.length > 10 || arr.length < 10) {
            return false;
          } else{
            return true;
          }
      },
      phoneNumberFormat(num) {
        let arr = num.split('');
        arr.splice(3, 0, '-');
        arr.splice(7, 0, '-');
        let correctNumber = arr.join('');
        return correctNumber;
      },
      checkFirstName(input) {
        if (input !== "") {
          return true;
        } else {
          return false;
        }
      }

}