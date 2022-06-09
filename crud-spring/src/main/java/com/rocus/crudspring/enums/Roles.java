package com.rocus.crudspring.enums;

public enum Roles {
        SUPPORT("Support"),
        TANK("Tank"),
        DPS("Damage Dealer");

        private String descricao;
        Roles(String descricao){
                this.descricao = descricao;
        }
        public String getDescricao(){
                return this.descricao;
        }
    }

