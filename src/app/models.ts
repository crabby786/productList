export interface IListItem {
    _id:                    string;
    cart:                   any[];
    batch:                  Batch[];
    status:                 BillStatusEnum;
    table_id:               number;
    restaurant_id:          number;
    user_id:                string;
    Fcm_id:                 string;
    user_name:              UserName;
    user_email:             UserEmail;
    user_phone:             UserPhone;
    oid:                    number;
    restaurant_name:        RestaurantName;
    restaurant_image:       string;
    restaurant_location:    RestaurantLocation;
    __v:                    number;
    cgst:                   number;
    grand_total:            number;
    net_total:              number;
    service_charge:         number;
    sgst:                   number;
    sub_total:              number;
    total_discount:         number;
    razorpay_uid?:          string;
    payment_otp:            number | null;
    payment_type:           PaymentType;
    transaction_id:         string;
    amount_transferrable:   number;
    bill_status:            BillStatusEnum;
    commission_amount:      number;
    time:                   Date;
    timestamp:              string;
    Fcm_id2?:               null;
    discount_type?:         DiscountType;
    cart_discount?:         number;
    cart_total?:            number;
    commission_percentage?: number;
    discountPercentage?:    number;
    discountRemaining?:     number;
    maximumDiscount?:       number;
    amountRemaining?:       number;
    minimumAmount?:         number;
    settlement_status?:     BillStatusEnum;
    ptr_razorpay_uid?:      string;
}

export interface Batch {
    items:           Item[];
    _id:             string;
    timestamp:       string;
    status:          BatchStatus;
    batch_total?:    number;
    batch_discount?: number;
}

export interface Item {
    _id:              string;
    category:         Category;
    customisation:    string;
    instructions:     string;
    jain:             boolean;
    name:             Name;
    optionPrice:      number;
    price:            number;
    quantity:         number;
    isAvailableJain?: boolean;
    item_type?:       string;
}

export enum Category {
    BumperOrder = "BUMPER ORDER",
    DhamakaEats = "DHAMAKA EATS!",
    Empty = "",
    JabardastJodi = "JABARDAST JODI",
}

export enum Name {
    Bhatura = "BHATURA",
    Chholay = "CHHOLAY",
    ChholayBhature = "CHHOLAY - BHATURE",
    ChholayChawal = "CHHOLAY - CHAWAL",
    ChholayKulche = "CHHOLAY - KULCHE",
    DilliWalaBHATURA3Pcs = "Dilli wala BHATURA (3 pcs)",
    JeeraRice = "Jeera Rice",
    Kulcha = "KULCHA",
    Kulcha3Pcs = "Kulcha (3 pcs)",
    MaaKeHaathKaRAJMA = "Maa ke haath ka RAJMA",
    Rajma = "RAJMA",
    RajmaChawal = "RAJMA - CHAWAL",
    RajmaKulche = "RAJMA - KULCHE",
    Rice = "Rice",
    SuperhitCHHOLAY = "Superhit CHHOLAY",
    SuperhitCHHOLAYWithSpicyChillis = "Superhit CHHOLAY with spicy chillis",
}

export enum BatchStatus {
    Paymentcard = "paymentcard",
    Paymentcomplete = "paymentcomplete",
}

export enum BillStatusEnum {
    Completed = "Completed",
    Pending = "Pending",
}

export enum DiscountType {
    Flat = "FLAT",
    Hybrid = "HYBRID",
    Limit = "LIMIT",
    MOV = "MOV",
    Nodiscount = "NODISCOUNT",
}

export enum PaymentType {
    Card = "Card",
    Cash = "Cash",
}

export enum RestaurantLocation {
    Oshiwara = "Oshiwara",
}

export enum RestaurantName {
    ChholayTest = "Chholay-Test",
}

export enum UserEmail {
    Dharminvora02061999GmailCOM = "dharminvora02061999@gmail.com",
    Dmgd1013GmailCOM = "dmgd1013@gmail.com",
    KalpaMehta25GmailCOM = "kalpa.mehta25@gmail.com",
    MehtaDhruveshGmailCOM = "mehta.dhruvesh@gmail.com",
    Mohammadmadhia1996GmailCOM = "mohammadmadhia1996@gmail.com",
    Noopuragr612GmailCOM = "noopuragr612@gmail.com",
    PankajkPearGmailCOM = "pankajk.pear@gmail.com",
    Parthvora2041997GmailCOM = "parthvora2041997@gmail.com",
    PrachiNimapinfotechCOM = "prachi@nimapinfotech.com",
    Prachichougule999GmailCOM = "prachichougule999@gmail.com",
    Preetichn04GmailCOM = "preetichn04@gmail.com",
    RahulBhanushali1994GmailCOM = "rahul.bhanushali1994@gmail.com",
    RahulBhanushali994GmailCOM = "rahul.bhanushali994@gmail.com",
    SalespeartechGmailCOM = "salespeartech@gmail.com",
}

export enum UserName {
    DharminVora = "dharmin vora",
    DhruveshMehta = "Dhruvesh Mehta",
    Empty = "",
    KalpaMehta = "Kalpa Mehta",
    MohammadMadhia = "Mohammad Madhia",
    PCChougule = "Pc Chougule",
    PankajKanjan = "Pankaj kanjan",
    ParthVora = "Parth Vora",
    PearTechnologies = "Pear Technologies",
    PrachiChougule = "Prachi Chougule",
    RahulBhanushali = "rahul bhanushali",
    Samriddhi = "Samriddhi",
    UserNameRahulBhanushali = "Rahul Bhanushali",
}

export enum UserPhone {
    Empty = "",
    The911234567890 = "+911234567890",
    The917738088051 = "+917738088051",
    The918446510275 = "+918446510275",
    The918879136904 = "+918879136904",
    The919004741388 = "+919004741388",
    The919136505652 = "+919136505652",
    The919769821904 = "+919769821904",
    The919792201211 = "+919792201211",
    The919833469260 = "+919833469260",
    The919867169626 = "+919867169626",
    The919920427165 = "+919920427165",
}