import { Component, OnInit, ViewChild, ElementRef, ɵisListLikeIterable } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { knownFolders, Folder, File, path } from "tns-core-modules/file-system";

@Component({
  selector: 'ns-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @ViewChild("icon", { read: ElementRef, static: false }) view: ElementRef;

  tab = [
    {
      id: 1,
      title: "Cahier",
      favorite: false
    },
    {
      id: 2,
      title: "Stylo",
      favorite: false
    },
    {
      id: 3,
      title: "Regle",
      favorite: false
    },
    {
      id: 4,
      title: "Crayon",
      favorite: true
    },
    {
      id: 5,
      title: "Gomme",
      favorite: false
    }
  ]
  folder: Folder;
  file: File;
  folderName: string;
  fileName: string;
  fileTextContent: string;
  successMessage: string;
  writtenContent: string;
  isItemVisible: boolean;
  documents: Folder;


  constructor(private page: Page) {
    // this.page.actionBarHidden = true;
  }

  ngOnInit(): void {

  }

  addOrRemoveFavorite(id, i) {

    if (this.tab[i].favorite == true) {
      this.tab[i].favorite = false;

    } else {
      this.tab[i].favorite = true;
    }

    this.view.nativeElement.style.color = "pink";



  }





  animate() {
    this.view.nativeElement.animate({
      backgroundColor: "#3D5AFE",
      duration: 500,
      curve: "easeIn"
    });

  }


  createFile() {
    let documents = knownFolders.documents();
    this.file = documents.getFile("testFolder/testFile2.txt"); // testFolder optionnel
    let contenuFichier;
    let tableau = [
      {
        id: 1,
        title: "regle",
        favorite: true
      },
      {
        id: 2,
        title: "cahier",
        favorite: false
      },
    ]

    contenuFichier = JSON.stringify(tableau);

    this.file.writeText(this.fileTextContent || contenuFichier)
      .then(result => {
        this.file.readText()
          .then(res => {
            this.successMessage = "Successfully saved in " + this.file.path;
            this.writtenContent = res;
            this.isItemVisible = true;
            alert("file created");
          });
      }).catch(err => {
        console.log(err);
      });
  }

  readFile() {
    let documents = knownFolders.documents();
    this.file = documents.getFile("testFolder/testFile2.txt");

    console.log("le file" + this.file);

    this.file.readText()
      .then(res => {
        this.writtenContent = res;
        alert("le contenu " + this.writtenContent);
      }).catch(err => {
        console.log(err.stack);
      });

  }

  checkIfFilesExist() {
    this.documents = knownFolders.documents();
    let myPath = path.join(this.documents.path, "testFolder/testFile.txt");
    let exists = File.exists(myPath);
    alert("Does Text.txt exists: " + exists);
  }



  event() {
    // // alert("ok");
    // confirm("Press a button!");
    // // var person = prompt("Please enter your name");


    // let options = {
    //   title: "Race selection",
    //   message: "Race chosen: Unicorn",
    //   okButtonText: "OK"
    // };

    // alert(options);

  //   let options = {
  //     title: "Race selection",
  //     message: "Are you sure you want to be a Unicorn?",
  //     okButtonText: "Yes",
  //     cancelButtonText: "No",
  //     neutralButtonText: "Cancel"
  // };
  
  // confirm(options).then((result: boolean) => {
  //     console.log(result);
  // });


  }


  creer(lePrenom,monAge){
    // console.log("ici", lePrenom);
    alert("le prenom " +lePrenom + "mon age " +monAge);
  }




}

