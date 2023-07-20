function calcul(){
    nbQuestions = 10;
    total_points = 0;
    nom = new Array();
    nomLength = new Array();
    cpt = 0;

    for (i = 0; i<=(nbQuestions-1); i++){
        nom[i] = document.getElementsByName("qcm"+i);
        nomLength[i] = nom[i].length;

        for (j = 0; j<(nomLength[i]-1); j++){
            if (nom[i][j].checked == true){
                cpt = cpt + eval(nom[i][j].value);
                total_points = total_points + eval(nom[i][j].value);
            }
            else{
                cpt = cpt;
                total_points = total_points + eval(nom[i][j].value);
            }
        }
    }
    score = cpt*20/total_points;
    document.questionnaire.total.value = score + " / " + 20;
}