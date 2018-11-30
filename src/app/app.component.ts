import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';

import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

import { ConfigService } from './providers/config-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    point: {
      visible: false
    },
    // loop: true,
    touch: true,
  }
  carouselWords = [];

  carouselActive = false;

  randomizer = true;
  randomizerWords = 10;

  stepItems: any;
  stepValues = [];
  listchoicesItems: any;
  listchoicesValues = [];
  listchoices: any;

  vowelItems: any;
  vowelValues = [];
  consonantItems: any;
  consonantValues = [];
  consonantDigraphItems: any;
  consonantDigraphValues = [];
  weldedSoundItems: any;
  weldedSoundValues = [];
  suffixItems: any;
  suffixValues = [];

  filteredWords = [];

  config = TreeviewConfig.create({
    // hasCollapseExpand: true
  });

  constructor(private cdr: ChangeDetectorRef, private configService: ConfigService) { }

  ngOnInit() {
    let steps = [];
    let listchoices = [];

    for (let step of this.configService.getConfig().data.steps) {
      let substeps = [];

      for (let substep of step.substeps) {
        for (let listchoice of substep.listchoices) {
          let duplicate = false;

          for (let currentListchoice of listchoices) {
            if (listchoice.listchoice === currentListchoice.value) {
              duplicate = true;
              break;
            }
          }

          if (!duplicate) {
            let item = new TreeviewItem({
              text: listchoice.listchoice, value: listchoice.listchoice
            });

            listchoices.push(item);
          }
        }

        let item = new TreeviewItem({
          text: substep.substep, value: substep.substep
        });

        substeps.push(item);
      }

      let item = new TreeviewItem({
        text: step.step, value: step.step, children: substeps
      });

      steps.push(item);
    }

    let stepsItem = new TreeviewItem({
      text: 'Steps', value: 'steps', children: steps
    });

    let listchoicesItem = new TreeviewItem({
      text: 'List Choices', value: 'listchoices', children: listchoices
    });

    this.stepItems = [stepsItem];
    this.listchoicesItems = [listchoicesItem];

    let vowels = [];
    for (let vowel of this.configService.getConfig().vowelsList) {
      let item = new TreeviewItem({
        text: vowel, value: vowel, checked: false
      });

      vowels.push(item);
    }
    let vowelItem = new TreeviewItem({
      text: 'Vowels', value: 'vowels', children: vowels
    });
    this.vowelItems = [vowelItem];

    let consonants = [];
    for (let consonant of this.configService.getConfig().consonantsList) {
      let item = new TreeviewItem({
        text: consonant, value: consonant, checked: false
      });

      consonants.push(item);
    }
    let consonantItem = new TreeviewItem({
      text: 'Consonants', value: 'consonants', children: consonants
    });
    this.consonantItems = [consonantItem];

    let consonantDigraphs = [];
    for (let consonantDigraph of this.configService.getConfig().consonantDigraphsList) {
      let item = new TreeviewItem({
        text: consonantDigraph, value: consonantDigraph, checked: false
      });

      consonantDigraphs.push(item);
    }
    let consonantDigraphItem = new TreeviewItem({
      text: 'Consonant Digraphs', value: 'consonantDigraphs', children: consonantDigraphs
    });
    this.consonantDigraphItems = [consonantDigraphItem];

    let weldedSounds = [];
    for (let weldedSound of this.configService.getConfig().weldedSoundsList) {
      let item = new TreeviewItem({
        text: weldedSound, value: weldedSound, checked: false
      });

      weldedSounds.push(item);
    }
    let weldedSoundItem = new TreeviewItem({
      text: 'Welded Sounds', value: 'weldedSound', children: weldedSounds
    });
    this.weldedSoundItems = [weldedSoundItem];

    let suffixes = [];
    for (let suffix of this.configService.getConfig().suffixesList) {
      let text = suffix.suffix + (suffix.exclude ? ' (excl -' + suffix.exclude + ')' : '');
      let item = new TreeviewItem({
        text: '-' + text, value: suffix, checked: false
      });

      suffixes.push(item);
    }
    let suffixItem = new TreeviewItem({
      text: 'Suffixes', value: 'suffixes', children: suffixes
    });
    this.suffixItems = [suffixItem];

    this.filterWords();
  }

  filterWords() {
    let filteredWords = [];

    for (let step of this.configService.getConfig().data.steps) {
      for (let substep of step.substeps) {
        if (this.stepValues.indexOf(substep.substep) > -1) {
          for (let listchoice of substep.listchoices) {
            if (this.listchoicesValues.indexOf(listchoice.listchoice) > -1) {
              for (let word of listchoice.words) {
                if (filteredWords.indexOf(word) < 0) {
                  let foundVowel = this.vowelValues.length == 0;
                  if (!foundVowel) {
                    for (let vowelValue of this.vowelValues) {
                      if (word.includes(vowelValue)) {
                        foundVowel = true;
                        break;
                      }
                    }
                  }

                  let foundConsonant = this.consonantValues.length == 0;
                  if (!foundConsonant) {
                    for (let consonantValue of this.consonantValues) {
                      if (word.includes(consonantValue)) {
                        foundConsonant = true;
                        break;
                      }
                    }
                  }

                  let foundConsonantDigraph = this.consonantDigraphValues.length == 0;
                  if (!foundConsonantDigraph) {
                    for (let consonantDigraphValue of this.consonantDigraphValues) {
                      if (word.includes(consonantDigraphValue)) {
                        foundConsonantDigraph = true;
                        break;
                      }
                    }
                  }

                  let foundWeldedSound = this.weldedSoundValues.length == 0;
                  if (!foundWeldedSound) {
                    for (let weldedSoundValue of this.weldedSoundValues) {
                      if (word.includes(weldedSoundValue)) {
                        foundWeldedSound = true;
                        break;
                      }
                    }
                  }

                  let foundSuffix = this.suffixValues.length == 0;
                  if (!foundSuffix) {
                    for (let suffixValue of this.suffixValues) {
                      if (word.endsWith(suffixValue.suffix) && !word.endsWith(suffixValue.exclude)) {
                        foundSuffix = true;
                        break;
                      }
                    }
                  }

                  if (foundVowel && foundConsonant && foundConsonantDigraph && foundWeldedSound && foundSuffix) {
                    filteredWords.push(word);
                  }
                }
              }
            }
          }
        }
      }

      this.filteredWords = filteredWords;
    }
  }

  enableSlideshow() {
    if (this.randomizer) {
      this.carouselWords = [];
      while (this.carouselWords.length < this.randomizerWords) {
        let r = Math.floor(Math.random() * this.filteredWords.length) + 1;
        if (this.carouselWords.indexOf(this.filteredWords[r]) === -1) this.carouselWords.push(this.filteredWords[r]);
      }
    } else {
      this.carouselWords = this.filteredWords;
    }

    this.carouselActive = true;
    this.cdr.detectChanges();
  }
}

