/*Advanced Interfaces & Optional Properties
შექმენი ინტერფეისი User, რომელსაც ექნება:

id (number)

username (string)

email (string)

bio (სურვილისამებრ/optional string)

role (უნდა იყოს მხოლოდ ორიდან ერთ-ერთი: "admin" ან "user")

შემდეგ შექმენი ფუნქცია updateUser, რომელიც არგუმენტად მიიღებს User ობიექტს და დალოგავს ტექსტს: "User [username] is an [role]". */


function updateUser(user) {
  console.log("User " + user.username + " is an " + user.role);
}