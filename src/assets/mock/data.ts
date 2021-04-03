import { CardTypeEnum } from "src/shared/enums/card-type.enum";
import { Card } from "src/shared/models/card.model";
import { Outcomes } from "src/shared/models/outcomes.model";

export const cardDeck: Array<Card> = [
    // Problem 1
    {
        cardType: CardTypeEnum.PROBLEM,
        characterName: 'Jennifer Eubank',
        imagePath: './assets/images/pnj/Jennifer_Eubank.png',
        problem: {
            text: "Vos bâtiments ne sont pas bien conçus. Laissez-moi redessiner les plans pour vous.",
            firstChoice: {
                text: "Je n'ai pas besoin de votre aide.",
                consequences: {
                    resources: 0,
                    technology: -1,
                    population: 0,
                    finances: 1
                }
            },
            secondChoice: {
                text: "Redessinez la ville.",
                consequences: {
                    resources: -2,
                    technology: 2,
                    population: 0,
                    finances: -2
                }
            }
        }
    },
    // Problem 2
    {
        cardType: CardTypeEnum.PROBLEM,
        characterName: 'Timothée Bahuaud',
        imagePath: './assets/images/pnj/Timothée_Bahuaud.png',
        problem: {
            text: "Les grottes sous-marines sont remplies de précieux coquillages mais ce n'est pas un endroit sûr.",
            firstChoice: {
                text: "Allons les chercher.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: -1,
                    finances: 2
                }
            },
            secondChoice: {
                text: "Nous ne devrions pas mettre notre peuple en danger.",
                consequences: {
                    resources: -2,
                    technology: 0,
                    population: 1,
                    finances: 0
                }
            }
        }
    },
    // Problem 3
    {
        cardType: CardTypeEnum.PROBLEM,
        characterName: 'Estelle Cazeneuve',
        imagePath: './assets/images/pnj/Estelle_Cazeneuve.png',
        problem: {
            text: "Nous avons besoin de plus de nourriture mais nous n'avons pas assez de pêcheurs.",
            firstChoice: {
                text: "Trouvons plus de pêcheurs.",
                consequences: {
                    resources: 2,
                    technology: 0,
                    population: 2,
                    finances: -1
                }
            },
            secondChoice: {
                text: "Faire travailler les pêcheurs plus longtemps.",
                consequences: {
                    resources: 1,
                    technology: 0,
                    population: -2,
                    finances: 0
                }
            }
        }
    },
    // Problem 4
    {
        cardType: CardTypeEnum.PROBLEM,
        characterName: 'Julia Serres',
        imagePath: './assets/images/pnj/Julia_Serres.png',
        problem: {
            text: "Quelques Dockeurs sont tombés malades. Ils ne peuvent pas se payer de médicaments.",
            firstChoice: {
                text: "Je ne peux pas les traiter différemment des autres.",
                consequences: {
                    resources: 1,
                    technology: 0,
                    population: -2,
                    finances: 1
                }
            },
            secondChoice: {
                text: "Je leur fournirai les médicaments.",
                consequences: {
                    resources: -1,
                    technology: 0,
                    population: 1,
                    finances: -1
                }
            }
        }
    },
    // Problem 5
    {
        cardType: CardTypeEnum.PROBLEM,
        characterName: 'Carla Boireau',
        imagePath: './assets/images/pnj/Carla_Boireau.png',
        problem: {
            text: "La porte a cessé de fonctionner. Les pêcheurs ne peuvent pas retourner à l'intérieur du dôme.",
            firstChoice: {
                text: "Ils doivent trouver un autre moyen d'entrer.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: -2,
                    finances: 0
                }
            },
            secondChoice: {
                text: "Essayez de la réparer.",
                consequences: {
                    resources: -1,
                    technology: 0,
                    population: 1,
                    finances: -1
                }
            }
        }
    },
    // Problem 6
    {
        cardType: CardTypeEnum.PROBLEM,
        characterName: 'Adara Grünberg',
        imagePath: './assets/images/pnj/Adara_Grünberg.png',
        problem: {
            text: "Mon amour, les habitants s'ennuient et ont besoin de divertissement.",
            firstChoice: {
                text: "Créons un zoo sous-marin.",
                consequences: {
                    resources: -1,
                    technology: 0,
                    population: 1,
                    finances: -2
                }
            },
            secondChoice: {
                text: "Nous avons plus important à faire.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: -2,
                    finances: 2
                }
            }
        }
    },
    // Problem 7
    {
        cardType: CardTypeEnum.PROBLEM,
        characterName: 'Conseiller Gayhardt',
        imagePath: './assets/images/pnj/Conseiller_Gayhardt.png',
        problem: {
            text: "Archibald, j'ai une mauvaise nouvelle à t'annoncer.",
            firstChoice: {
                text: "Qu'est-ce qu'il y a ?",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            },
            secondChoice: {
                text: "Crache-moi le morceau !",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            }
        }
    },
    // Problem 8
    {
        cardType: CardTypeEnum.PROBLEM,
        characterName: 'Conseiller Gayhardt',
        imagePath: './assets/images/pnj/Conseiller_Gayhardt.png',
        problem: {
            text: "Les pêcheurs croient avoir vu une énorme créature juste au-delà des monts sous-marins.",
            firstChoice: {
                text: "Ce n'est pas possible.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: -1,
                    finances: 0
                }
            },
            secondChoice: {
                text: "Parlez-moi de cette créature.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 1,
                    finances: 0
                }
            }
        }
    },
     // Problem 9
     {
        cardType: CardTypeEnum.PROBLEM,
        characterName: 'Conseiller Gayhardt',
        imagePath: './assets/images/pnj/Conseiller_Gayhardt.png',
        problem: {
            text: "Il prend forme d'un serpent gigantesque sanguinaire de plus de 15 mètres.",
            firstChoice: {
                text: "Créeons une balise électronique pour l'emprisonner.",
                consequences: {
                    resources: -1,
                    technology: 2,
                    population: 1,
                    finances: -1
                }
            },
            secondChoice: {
                text: "Ce n'est qu'un mythe.",
                consequences: {
                    resources: -10,
                    technology: -10,
                    population: -10,
                    finances: -10
                }
            }
        }
    },
     // Problem 10
     {
        cardType: CardTypeEnum.PROBLEM,
        characterName: 'Conseiller Gayhardt',
        imagePath: './assets/images/pnj/Conseiller_Gayhardt.png',
        problem: {
            text: "La balise électronique a fonctionné. Nous l'avons emprisonnée !",
            firstChoice: {
                text: "Tuez-la !",
                consequences: {
                    resources: -10,
                    technology: -10,
                    population: -10,
                    finances: -10
                }
            },
            secondChoice: {
                text: "Exposons-la dans le zoo.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 1,
                    finances: 2
                }
            }
        }
    },
      // Problem 11
      {
        cardType: CardTypeEnum.PROBLEM,
        characterName: 'Conseiller Gayhardt',
        imagePath: './assets/images/pnj/Conseiller_Gayhardt.png',
        problem: {
            text: "La créature est parvenue à détruire l'aquarium du zoo !",
            firstChoice: {
                text: "Il ne faut pas la laisser s'échapper !",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: -2,
                    finances: -1
                }
            },
            secondChoice: {
                text: "Protégez les citoyens !",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 1,
                    finances: -1
                }
            }
        }
    },
     // Problem 12
     {
        cardType: CardTypeEnum.PROBLEM,
        characterName: 'Finn Habicht',
        imagePath: './assets/images/pnj/Finn_Habicht.png',
        problem: {
            text: "J'ai entendu des bruits étranges dans les hangars cette nuit.",
            firstChoice: {
                text: "C'est rien. Ne vous inquiétez pas.",
                consequences: {
                    resources: -1,
                    technology: 0,
                    population: -2,
                    finances: 0
                }
            },
            secondChoice: {
                text: " Renforçons les barrières.",
                consequences: {
                    resources: -2,
                    technology: 1,
                    population: 1,
                    finances: -2
                }
            }
        }
    },
     // Problem 13
     {
        cardType: CardTypeEnum.PROBLEM,
        characterName: 'Quentin Pascal',
        imagePath: './assets/images/pnj/Quentin_Pascal.png',
        problem: {
            text: "Un Dellien a été tué par un Dockeur. Comment punir ce Dockeur pour son crime ?",
            firstChoice: {
                text: "Donnez-lui une seconde chance.",
                consequences: {
                    resources: 1,
                    technology: 0,
                    population: 1,
                    finances: 0
                }
            },
            secondChoice: {
                text: "Bannissez-le de la ville de THETA.",
                consequences: {
                    resources: -1,
                    technology: 0,
                    population: -1,
                    finances: 0
                }
            }
        }
    },
    // Problem 14
    {
        cardType: CardTypeEnum.PROBLEM,
        characterName: 'Albrecht Grünberg',
        imagePath: './assets/images/pnj/Albrecht_Grünberg.png',
        problem: {
            text: "Les Dockeurs se sentent surchargés de travail. Les autres castes doivent-elles les aider ?",
            firstChoice: {
                text: "Non, ce n'est pas leur travail.",
                consequences: {
                    resources: -1,
                    technology: 0,
                    population: 1,
                    finances: -1
                }
            },
            secondChoice: {
                text: "Oui",
                consequences: {
                    resources: 2,
                    technology: 1,
                    population: 1,
                    finances: 2
                }
            }
        }
    },
    // Problem 15
    {
        cardType: CardTypeEnum.PROBLEM,
        characterName: 'Adara Grünberg',
        imagePath: './assets/images/pnj/Adara_Grünberg.png',
        problem: {
            text: "J'ai donné naissance à une fille. Comment allons-nous l'appeler ?",
            firstChoice: {
                text: "Ariane.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            },
            secondChoice: {
                text: "Comment oses-tu donner naissance à une fille ?",
                consequences: {
                    resources: 10,
                    technology: 10,
                    population: 10,
                    finances: 10
                }
            }
        }
    }
];

export const upperOutcomes: Outcomes = {
    resources: {
        cardType: CardTypeEnum.LOSS,
        characterName: 'Archibald Grünberg',
        imagePath: './assets/images/pnj/Archibald_Grünberg_lose.png',
        problem: {
            text: "Le peuple vous trouve trop puissant. Vous avez perdu !",
            firstChoice: {
                text: "Essayer à nouveau.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            },
            secondChoice: {
                text: "Essayer à nouveau.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            }
        }
    },
    technology: {
        cardType: CardTypeEnum.LOSS,
        characterName: 'Archibald Grünberg',
        imagePath: './assets/images/pnj/Archibald_Grünberg_lose.png',
        problem: {
            text: "Le peuple vous trouve trop puissant. Vous avez perdu !",
            firstChoice: {
                text: "Essayer à nouveau.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            },
            secondChoice: {
                text: "Essayer à nouveau.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            }
        }
    },
    population: {
        cardType: CardTypeEnum.LOSS,
        characterName: 'Archibald Grünberg',
        imagePath: './assets/images/pnj/Archibald_Grünberg_lose.png',
        problem: {
            text: "Il n'y a pas assez de place pour tout le monde. Vous avez perdu !",
            firstChoice: {
                text: "Essayer à nouveau.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            },
            secondChoice: {
                text: "Essayer à nouveau.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            }
        }
    },
    finances: {
        cardType: CardTypeEnum.LOSS,
        characterName: 'Archibald Grünberg',
        imagePath: './assets/images/pnj/Archibald_Grünberg_lose.png',
        problem: {
            text: "Le peuple vous accuse de garder la richesse. Vous avez perdu !",
            firstChoice: {
                text: "Essayer à nouveau.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            },
            secondChoice: {
                text: "Essayer à nouveau.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            }
        }
    }
}

export const lowerOutcomes: Outcomes = {
    resources: {
        cardType: CardTypeEnum.LOSS,
        characterName: 'Archibald Grünberg',
        imagePath: './assets/images/pnj/Archibald_Grünberg_lose.png',
        problem: {
            text: "La moitié de la population est morte à cause du manque de ressources. Vous avez perdu !",
            firstChoice: {
                text: "Essayer à nouveau.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            },
            secondChoice: {
                text: "Essayer à nouveau.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            }
        }
    },
    technology: {
        cardType: CardTypeEnum.LOSS,
        characterName: 'Archibald Grünberg',
        imagePath: './assets/images/pnj/Archibald_Grünberg_lose.png',
        problem: {
            text: "La ville sous-marine THETA n'est pas assez avancée technologiquement. Vous avez perdu !",
            firstChoice: {
                text: "Essayer à nouveau.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            },
            secondChoice: {
                text: "Essayer à nouveau.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            }
        }
    },
    population: {
        cardType: CardTypeEnum.LOSS,
        characterName: 'Archibald Grünberg',
        imagePath: './assets/images/pnj/Archibald_Grünberg_lose.png',
        problem: {
            text: "Vous n’êtes pas assez pour faire évoluer la cité sous-marine. Vous avez perdu !",
            firstChoice: {
                text: "Essayer à nouveau.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            },
            secondChoice: {
                text: "Essayer à nouveau.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            }
        }
    },
    finances: {
        cardType: CardTypeEnum.LOSS,
        characterName: 'Archibald Grünberg',
        imagePath: './assets/images/pnj/Archibald_Grünberg_lose.png',
        problem: {
            text: "Vous avez perdu tout l'argent qui a été investi dans le projet THETA. Vous avez perdu !",
            firstChoice: {
                text: "Essayer à nouveau.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            },
            secondChoice: {
                text: "Essayer à nouveau.",
                consequences: {
                    resources: 0,
                    technology: 0,
                    population: 0,
                    finances: 0
                }
            }
        }
    }
}

export const winningCard: Card = {
    cardType: CardTypeEnum.WIN,
    characterName: 'Archibald Grünberg',
    imagePath: './assets/images/pnj/Archibald_Grünberg_win.png',
    problem: {
        text: "Vous avez gagné 10km de plus. Bravo !",
        firstChoice: {
            text: "Continuer.",
            consequences: {
                resources: 0,
                technology: 0,
                population: 0,
                finances: 0
            }
        },
        secondChoice: {
            text: "Continuer.",
            consequences: {
                resources: 0,
                technology: 0,
                population: 0,
                finances: 0
            }
        }
    }
}