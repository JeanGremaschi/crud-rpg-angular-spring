package com.rocus.crudspring.enums;

public enum Avatar {
        ADVENTURER("adventurer"),
        ALCHEMY("alchemy"),
        ASSASSIN("assasin"),
        BARBARIAN("barbarian"),
        BOW("bow"),
        CROSSBOW("crossbow"),
        DRAGON("dragon"),
        DRUID("druid"),
        EXPLORER("explorer"),
        GUNNERY("gunnery"),
        KNIGHT("knight"),
        MAGICIAN("magician"),
        MARTIAL("martial"),
        MONK("monk"),
        NINJA("ninja"),
        PRIEST("priest"),
        SAMURAI("samurai"),
        SWORDSMAN("swordsman"),
        THIEF("thief"),
        WIZARD("wizard");

        private String descricao;
        Avatar(String descricao){
                this.descricao = descricao;
        }
        public String getDescricao(){
                return this.descricao;
        }
    }

