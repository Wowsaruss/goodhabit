module.exports = {

    checkPhoneNumber(num) {
        let arr = num.split("")
        console.log(arr)
          console.log(arr.length)
          if (arr.length > 10 || arr.length < 10) {
            return 'Incorrect phone number';
          }
      },
      phoneNumberFormat(num) {
        let arr = num.split('');
        arr.splice(3, 0, '-');
        arr.splice(7, 0, '-');
        let correctNumber = arr.join('');
        return correctNumber;
      }

}