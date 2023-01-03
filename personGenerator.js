const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ольга",
            "id_2": "Светлана",
            "id_3": "Катерина",
            "id_4": "Наталья",
            "id_5": "Софья",
            "id_6": "Анна",
            "id_7": "Мария",
            "id_8": "Елена",
            "id_9": "Марина",
            "id_10": "Валерия"
        }
    }`,
    profession: `{
        "count": 15,
        "list": {     
            "id_1": "Сталевар",
            "id_2": "Водолаз",
            "id_3": "Машинист экскаватора",
            "id_4": "Слесарь",
            "id_5": "Шахтер",
            "id_6": "Разнорабочий",
            "id_7": "Авиадиспетчер",
            "id_8": "Педагог",
            "id_9": "Автомеханик",
            "id_10": "Агент по туризму",
            "id_11": "Агроном",
            "id_12": "Адвокат",
            "id_13": "Веб-дизайнер",
            "id_14": "Программист",
            "id_15": "Бухгалтер"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json, max = '', min = '') {
        const obj = JSON.parse(json);
        let prop; 
        max != '' ? prop = `id_${this.randomIntNumber(max, min)}` : prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(gender) {

        return gender == 'Мужчина' ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson);

    },

    randomSurname: function(gender) {

        return gender == 'Мужчина' ? this.randomValue(this.surnameJson) : `${this.randomValue(this.surnameJson)}а`;

    },

    randomMiddlename: function(gender) {
        let midName = this.randomValue(this.firstNameMaleJson);
        if (gender == 'Мужчина') {
            if (midName.substr(-1) == 'й') {
                return `${midName.slice(0,-1)}евич`;
            } 
            if (midName.substr(-1) == 'а') {
                return `${midName.slice(0,-1)}ович`;
            } else {
                return `${midName}ович`;
            } 
        } else {
            if (midName.substr(-1) == 'а') {
                return `${midName.slice(0,-1)}овна`;
            } 
            if (midName.substr(-1) == 'й')  {
                return `${midName.slice(0,-1)}евна`;
            } else {
                return `${midName}овна`;
            }
        }    
    },

    randomDay: function(month) {
        let days;
        if (month == 2 ) {
            days = 28;
        } else {   
            if (month == 4 || month == 6 || month == 9 || month == 11) {
                days = 30;
            } else {
                days = 31;
            }
        }
        return this.randomIntNumber(1, days);
    },

    randomGender: function() {
         return this.randomIntNumber() ? this.GENDER_FEMALE : this.GENDER_MALE ;
    },

    randomProfession: function(gender) {
        if (gender == 'Мужчина') {
            return this.randomValue(this.profession);  
        } else {
            return this.randomValue(this.profession, 15, 7);
        }  
        
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.midname = this.randomMiddlename(this.person.gender);
        this.person.month = this.randomIntNumber(1, 12);
        this.person.day = this.randomDay(this.person.month);
        this.person.year = this.randomIntNumber(1960, 2000);
        this.person.profession = this.randomProfession(this.person.gender);
        return this.person;
    }
};





