const seed = process.argv[2];

switch (seed) {
  case "categories":
    import("./seedCategories.mjs");
    break;
  case "teachers":
    import("./seedTeacher.mjs");
    break;
  case "courses":
    import("./seedCourses.js");
    break;
  case "cleandatabases":
    import("./cleanDatabase.mjs");
    break;
  default:
    console.log("Spécifiez un seed : categories, teachers ou courses");
}
