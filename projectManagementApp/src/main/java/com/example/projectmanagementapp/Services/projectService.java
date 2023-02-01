package com.example.projectmanagementapp.Services;

import com.example.projectmanagementapp.dto.*;
import com.example.projectmanagementapp.entities.*;
import com.example.projectmanagementapp.repositories.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class projectService {
    @Autowired
    TableRepository tr;
    @Autowired
    SprintRepository sr;
     @Autowired
    ProjectRepository pr;
    @Autowired
    ListeRepository lr;
    @Autowired
    CardRepository cr;
    @Autowired
    RoleRepository rr;
    @Autowired
    UserService ur;

    @Autowired
    UserRepo urr;


    public Project saveProject(Project p){
        return pr.save(p);
    }
    public void deleteProject(Project p){
        pr.delete(p);

    }
    
    public Role addTeamMemberRole(Long idu, String role , Long idP){
        if(rr.findByName(role)==null)  {
            Role r = new Role();
            r.setName(role);
            r.setProject(pr.findById(idP).get());
            r.setUser(urr.findById(idu).get());
           return rr.save(r);
        }
        else {
            rr.findByName(role).setName(role);
            rr.findByName(role).setProject(pr.findById(idP).get());
            rr.findByName(role).setUser(urr.findById(idu).get());
            return rr.save(rr.findByName(role));
        }

    }
    public void closeProject(Long p ) {
        if(pr.findById(p).get().getTables().stream().noneMatch(tableProject -> tableProject.getSprints().stream().noneMatch(s->s.getClosed().equals(false)))) {
            pr.findById(p).get().setClosed(true);
            pr.save(pr.findById(p).get());
        }else {
            log.info("close sprints related to this project first");
        }

        }

    public TableProject saveTable(TableProject t , Long p){
        t.setProject(pr.findById(p).get());
        return tr.save(t);
    }

    public void deleteTable(Long t){
         tr.delete(tr.findById(t).get());
    }
    

    public Liste saveListe(Liste l , Long id_table){
       l.setTable(tr.findById(id_table).get());
        return lr.save(l);
    }

    public void deleteListe(Long t){

        lr.delete(lr.findById(t).get());
    }
    public dtoSprint dtoconvertSprint(Sprint s){
        dtoSprint dtoS = new dtoSprint();
        dtoS.setClosed(s.getClosed());
        dtoS.setName(s.getName());
        dtoS.setDescription(s.getDescription());
        dtoS.setId(s.getId());
        dtoS.setStart(s.getStart());
        dtoS.setDuration(s.getDuration());
        dtoS.setIdTable(s.getTable().getId());

        return  dtoS;
    }
    public List<dtoSprint> getSprints(Long idTable){
        return tr.findById(idTable).get().getSprints().stream().map(l->dtoconvertSprint(l)).collect(Collectors.toList());
    }
    public dtoSprint saveSprint(Sprint s , Long p){

        s.setTable(tr.findById(p).get());
        log.info(s.getDescription());

        return dtoconvertSprint(sr.save(s));
    }
    public void deleteSprint(Long s){
        sr.delete(sr.findById(s).get());
    }
    public void closeSprint(Long s ){
        sr.findById(s).get().setClosed(true);
       sr.save(sr.findById(s).get()) ;
    }


    public Card saveCard(Card c , Long l){
        c.setListe(lr.findById(l).get());
        return cr.save(c);
    }
    public Card saveCardSprint(Card c , Long l){
        c.setSprint(sr.findById(l).get());
        return cr.save(c);
    }
    public Card saveCardToCard(Card c , Long Idc){
       Card cardd= cr.findById(Idc).get();
        cardd.getCarrds().add(c);
        return cr.save(cardd);
    }

    public void deleteCard(Long t){
        cr.delete(cr.findById(t).get());
    }

    public dtoTable dtoconvertTable(TableProject t){
        dtoTable dtoT = new dtoTable();
        dtoT.setIdProject(t.getProject().getId());
        dtoT.setId(t.getId());
        dtoT.setTitle(t.getName());
        return  dtoT;
    }

    public dtoList dtoconvertList(Liste list){
        dtoList dtoL = new dtoList();
        dtoL.setIdT(list.getTable().getId());
        dtoL.setName(list.getName());
        dtoL.setId(list.getId());
        return  dtoL;
    }

    public dtoCard dtoconvertCard(Card card){
        dtoCard dtoC = new dtoCard();
        dtoC.setId(card.getId());
        if(card.getListe()!=null)
        dtoC.setIdL(card.getListe().getId());
        if(card.getSprint()!=null)
        dtoC.setIds(card.getSprint().getId());
        dtoC.setDescription(card.getDescription());
        dtoC.setStatus(card.getStatus());
        dtoC.setType(card.getType());
        dtoC.setEstimation(card.getEstimation());
        dtoC.setRealisation(card.getRealisation());
        return  dtoC;
    }
    public dtoProject dtoconvertProject(Project project){
        dtoProject dtop = new dtoProject();
        dtop.setId(project.getId());
        dtop.setDate(project.getDate());
        dtop.setDescription(project.getDescription());
        dtop.setTitle(project.getTitle());
        dtop.setClosed(project.getClosed());
        return  dtop;
    }
    public List<dtoProject> getProjects(String idu) {
        return urr.findByUsername(idu).getRoles().stream().filter(r->r.getProject()!=null).map(r->dtoconvertProject(r.getProject())).collect(Collectors.toList());
    }
    public List<dtoTable> getTables(Long idp){
        return pr.findById(idp).get().getTables().stream().map(t->dtoconvertTable(t)).collect(Collectors.toList());
    }

    public List<dtoList> getListes(Long idt){
      return tr.findById(idt).get().getLists().stream().map(l->dtoconvertList(l)).collect(Collectors.toList());
    }
    public List<dtoCard> getCards(Long idl){
        return lr.findById(idl).get().getCards().stream().map(c->dtoconvertCard(c)).collect(Collectors.toList());
    }
    public ResponseEntity getCardsSprint(Long idl){
        try{
            return new ResponseEntity(sr.findById(idl).get().getCards(), HttpStatus.OK) ;
        }

        catch(Exception error){
            return new ResponseEntity<String>(error.getMessage(), HttpStatus.valueOf(500)) ;
        }

       // return sr.findById(idl).get().getCards().stream().map(c->dtoconvertCard(c)).collect(Collectors.toList());
    }
    public Liste updateList(Long idL, dtoCard card ){
        Liste l =  lr.findById(idL).get();
        Card c = cr.findById(card.getId()).get();
        c.setSprint(null);
        c.setEstimation(card.getEstimation());
        c.setDescription(card.getDescription());
        c.setType(card.getType());
        c.setStatus(card.getStatus());
        c.setRealisation(card.getRealisation());
       l.getCards().add(c);
       c.setListe(l);
       cr.save(c);
       return lr.save(l);
    }
    public Sprint updateSprint(Long idL, dtoCard card ){
        Sprint l =  sr.findById(idL).get();
        Card c = cr.findById(card.getId()).get();

        c.setEstimation(card.getEstimation());
        c.setDescription(card.getDescription());
        c.setType(card.getType());
        c.setStatus(card.getStatus());
        c.setRealisation(card.getRealisation());
        l.getCards().add(c);
        c.setListe(null);
        c.setSprint(l);
        cr.save(c);
        return sr.save(l);
    }

    public Card updateCard(Long idc, dtoCard card ){
        Card cc =  cr.findById(idc).get();

        cc.setEstimation(card.getEstimation());
        cc.setDescription(card.getDescription());
        cc.setType(card.getType());
        cc.setStatus(card.getStatus());
        cc.setRealisation(card.getRealisation());
        return cr.save(cc);
    }
    public dtoList updateTable(Long idl, dtoList list ){

       Liste l = lr.findById(idl).get() ;
       
        l.setName(list.getName());

        log.info("update table list") ;
        lr.save(l);
        return   list;
    }

    public List<dtoCard> getToDo(String Userid){
        return cr.findAll().stream().filter(c->
           c.getAssignee().equals(urr.findByUsername(Userid)) && c.getListe().getName().contains("to do")
        ).map(cc->dtoconvertCard(cc)).collect(Collectors.toList());
        }

        public dtoCharts getcharts(){
        dtoCharts dtocharts = new dtoCharts();
        List<Integer> l =new ArrayList<Integer>();

        dtocharts.setLabels(urr.findAll().stream().filter(u->u.getRoles().stream()
                .noneMatch(r->r.getName().equals("ROLE_COMPANY")))
                .map(User::getUsername).map(u->{
                 l.add((int) cr.findAll().stream().filter(c->c.getAssignee().getUsername().equals(u)&&c.getStatus().equals(true)).count()) ;

                  return u; }).collect(Collectors.toList()));
            dtocharts.setData(l);

            return dtocharts;
        }
    }

