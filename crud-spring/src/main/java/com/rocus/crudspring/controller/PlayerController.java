package com.rocus.crudspring.controller;

import com.rocus.crudspring.model.Attributes;
import com.rocus.crudspring.model.Character;
import com.rocus.crudspring.model.Player;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/players")
public class PlayerController {

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    public List<Player> getPlayers(){
        Attributes attributes = new Attributes();
        attributes.setId(1L);

        Character character = new Character();
        character.setId(1L);
        character.setAttributes(attributes);

        Player player = new Player();
        player.setId(1L);
        player.setName("Jogador");
        player.getCharacters().add(character);

        List<Player> playerList = new ArrayList<>();
        playerList.add(player);

        return playerList;
    }
}
