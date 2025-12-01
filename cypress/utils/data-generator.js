export class DataGenerator {
  // Generate random email with timestamp
  static randomEmail() {
    const timestamp = Date.now();
    return `user_${timestamp}@test.com`;
  }

  // Generate random username
  static randomUsername(length = 8) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `user_${result}`;
  }

  // Generate random phone number
  static randomPhone() {
    return `+1${Math.floor(1000000000 + Math.random() * 9000000000)}`;
  }

  // Generate random password
  static randomPassword(length = 10) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    return Array.from({ length }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join("");
  }

  // Pick a random item from an array
  static randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Generate random number in range
  static randomNumber(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

