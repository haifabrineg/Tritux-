package com.example.projectmanagementapp.Controllers;

import com.example.projectmanagementapp.Services.projectService;
import com.example.projectmanagementapp.dto.*;
import com.example.projectmanagementapp.entities.*;
import com.example.projectmanagementapp.repositories.SprintRepository;
import com.nimbusds.oauth2.sdk.Response;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api")
@CrossOrigin
public class ProjectController {

     @Autowired
    projectService ps;
    @Autowired
    SprintRepository sr;
    @PostMapping ("/member/{idu}/{role}/{idP}")
    public Role addTeamMemberRole(@PathVariable("idu") Long idu,@PathVariable("role") String role , @PathVariable("idP") Long idP){
        return ps.addTeamMemberRole(idu, role, idP);
    }

    @PostMapping("/project/save")
    public Project saveProject(@RequestBody Project p){
        return ps.saveProject(p);
    }
    @PostMapping("/project/close/{p}")
    public void closeProject(@PathVariable("p") Long p ) {
        ps.closeProject(p);
    }

   

        @PostMapping("/table/save/{p}")
    public TableProject saveTable(@RequestBody TableProject t ,@PathVariable("p") Long p){
            return ps.saveTable(t,p);
    }

    @DeleteMapping("/table/delete/{t}")
    public void deleteTable(@PathVariable("t") Long t){
        ps.deleteTable(t);
    }

    @PostMapping("/list/save/{id_table}")
    public Liste saveListe(@RequestBody Liste l , @PathVariable("id_table") Long id_table){
        return ps.saveListe(l, id_table);
    }


    @DeleteMapping("/list/delete/{l}")
    public void deleteListe(@PathVariable("l") Long l){
        ps.deleteListe(l);
    }


    @PostMapping("/sprint/save/{p}")
    public dtoSprint saveSprint(@RequestBody Sprint s , @PathVariable("p") Long p){
        return ps.saveSprint(s,p);
    }


    @GetMapping("getSprint/{id}")
    @ResponseBody
    public dtoSprint getSprint(@PathVariable("id") Long id){

        return  ps.dtoconvertSprint(sr.findById(id).get());
    }
    @DeleteMapping("/sprint/delete/{s}")
    public void deleteSprint(@PathVariable("s") Long s){
       ps.deleteSprint(s);
    }

    @PostMapping("/sprint/close/{s}")
    public void closeSprint(@PathVariable("s") Long s ){
        ps.closeSprint(s);
    }

    @PostMapping("/card/{l}/save")
    public Card saveCard(@RequestBody Card c ,@PathVariable("l") Long l){
        return ps.saveCard(c,l);
    }


    @PostMapping("/cardToCard/{idc}/save")
    public Card saveCardToCard(@RequestBody Card c ,@PathVariable("idc") Long idc){
        return ps.saveCardToCard(c,idc);
    }


    @DeleteMapping("/card/delete/{c}")
    public void deleteCard(@PathVariable("c") Long c){
        ps.deleteCard(c);
    }
    @GetMapping("/projects/{idu}")
    public List<dtoProject> getProjects(@PathVariable("idu") String idu) {
        return ps.getProjects(idu);
    }


        @GetMapping("/tables/{idp}")
    public List<dtoTable> getTables(@PathVariable("idp") Long idp){
        return ps.getTables(idp);
    }

    @GetMapping("/lists/{idt}")
    public List<dtoList> getLists(@PathVariable("idt") Long idt){
        return ps.getListes(idt);
    }

    @GetMapping("/sprints/{idt}")
    public List<dtoSprint> getSprints(@PathVariable("idt") Long idt){
        return ps.getSprints(idt);
    }



    @GetMapping("/cards/{idl}")
    public List<dtoCard> getCards(@PathVariable("idl") Long idl){
        return ps.getCards(idl);
    }

    @PostMapping("Table/update/{idT}")
    public dtoList updateTable(@PathVariable("idT") Long idT,@RequestBody dtoList list ){
        return ps.updateTable(idT, list);
    }
    @PostMapping("Card/update/{idc}")
    public Card updateCard(@PathVariable("idc") Long idc,@RequestBody dtoCard card ){
        return ps.updateCard(idc, card);
    }

    @PostMapping("List/update/{idl}")
    public Liste updateList(@PathVariable("idl") Long idL,@RequestBody dtoCard card ){
        return ps.updateList(idL, card);
    }

    @PostMapping("Sprint/update/{idl}")
    public Sprint updateSprint(@PathVariable("idl") Long idL,@RequestBody dtoCard card ){
        return ps.updateSprint(idL, card);
    }

    @GetMapping("/ToDo/{username}")
    public List<dtoCard> getToDo(@PathVariable("username") String username){
        return ps.getToDo(username);
    }

    @PostMapping("/cardSprint/save/{l}")
    public Card saveCardSprint(@RequestBody Card c ,@PathVariable("l") Long l){
        return ps.saveCardSprint(c,l);
    }

    @ResponseBody
    @GetMapping("/cardsSprint/{id}")
    public ResponseEntity getCardsSprint(@PathVariable("id") Long idl){
        return ps.getCardsSprint(idl);
    }
    @GetMapping("/charts/labels")
    public List<String> getchartslabels(){
        return  ps.getcharts().getLabels();
    }

    @GetMapping("/charts/data")
    public List<Integer> getchartsdata(){
        return  ps.getcharts().getData();
    }

}
