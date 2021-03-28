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
                text: "Je leur fournirai les médicaments.",
                consequences: {
                    resources: -1,
                    technology: 0,
                    population: 1,
                    finances: -1
                }
            },
            secondChoice: {
                text: "Je ne peux pas les traiter différemment des autres.",
                consequences: {
                    resources: 1,
                    technology: 0,
                    population: -2,
                    finances: 1
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