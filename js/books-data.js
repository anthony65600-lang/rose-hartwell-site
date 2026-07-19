/*
  Toute la liste de livres vit ici, dans ce seul tableau.
  Pour ajouter un livre : copie un bloc { ... }, colle-le, modifie les valeurs.
  Pas besoin de toucher au HTML ni au CSS : la page se met a jour toute seule.
  Champs :
    title      - titre exact du livre
    subtitle   - sous-titre KDP (laisser "" si tu ne l'as pas sous la main)
    asin       - le code ASIN Amazon (visible dans l'URL du produit ou sur KDP)
    price      - prix en USD, sans le symbole $
    category   - sert pour les boutons de filtre en haut de la section Livres
    cover      - chemin vers l'image de couverture (assets/covers/xxx.jpg)
*/

const BOOKS = [
  {
        title: "Blood Pressure Log Book",
        subtitle: "Large Print Blood Pressure and Heart Rate Tracker for Seniors - Record and Monitor Daily Readings, Medications and Medical History at Home",
        asin: "B0H8M339GC",
        price: "8.99",
        category: "Health & Caregiving",
        cover: "assets/covers/blood-pressure.jpg"
  },
  {
        title: "Blood Sugar Log Book",
        subtitle: "2-Year Daily Blood Sugar Tracker: 106 Weeks to Record 4 Glucose Readings a Day - Undated Large Print Diabetes Logbook",
        asin: "B0H7WPMQWN",
        price: "9.99",
        category: "Health & Caregiving",
        cover: "assets/covers/blood-sugar.jpg"
  },
  {
        title: "Migraine Tracker",
        subtitle: "A Daily Headache Journal to Log Attacks, Identify Triggers, and Track Pain, Symptoms and Relief - Large Print 6 x 9",
        asin: "B0H7T6J65B",
        price: "9.99",
        category: "Health & Caregiving",
        cover: "assets/covers/migraine.jpg"
  },
  {
        title: "Dementia & Alzheimer's Caregiver Log Book",
        subtitle: "",
        asin: "B0H67CQV5Q",
        price: "9.99",
        category: "Health & Caregiving",
        cover: "assets/covers/dementia.jpg"
  },
  {
        title: "Car Maintenance Log Book",
        subtitle: "Vehicle Service Record, Repair Journal, Fuel Log and Maintenance Tracker for Car Owners and Mechanics",
        asin: "B0H89CD8YR",
        price: "9.99",
        category: "Home & Vehicle",
        cover: "assets/covers/car-maintenance.jpg"
  },
  {
        title: "Pool Maintenance Log Book",
        subtitle: "",
        asin: "B0H54D1NC8",
        price: "9.99",
        category: "Home & Vehicle",
        cover: "assets/covers/pool-maintenance.jpg"
  },
  {
        title: "Forklift Daily Inspection Log Book",
        subtitle: "",
        asin: "B0H6XMNVRM",
        price: "9.99",
        category: "Home & Vehicle",
        cover: "assets/covers/forklift.jpg"
  },
  {
        title: "Sheep Record Keeping Log Book",
        subtitle: "",
        asin: "B0H68FGLHN",
        price: "9.99",
        category: "Farm & Animals",
        cover: "assets/covers/sheep.jpg"
  },
  {
        title: "Cattle Record Keeping Log Book",
        subtitle: "",
        asin: "B0H67Y5RCH",
        price: "9.99",
        category: "Farm & Animals",
        cover: "assets/covers/cattle.jpg"
  },
  {
        title: "The Beekeeper's Journal",
        subtitle: "",
        asin: "B0H6791TVR",
        price: "9.99",
        category: "Farm & Animals",
        cover: "assets/covers/beekeeper.jpg"
  }
  ];
