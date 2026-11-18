import cvFile from '../assets/CV_Rakotoarizao_Tiana_Fifaliana.pdf.pdf?url'

export const cvUrl = cvFile
export const cvFileName = 'CV_Rakotoarizao_Tiana_Fifaliana.pdf'

export type Project = {
  id: string
  name: string
  summary: string
  details: string
  tags: string[]
  github?: string
  accent: string
}

export const navItems = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'stack', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'lab', label: 'Labo d’algorithmes' },
  { id: 'journey', label: 'Parcours' },
  { id: 'contact', label: 'Contact' },
] as const

export const stackGroups = [
  {
    title: 'Front-end',
    note: 'Conception d’interfaces et expériences centrées sur les composants.',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular'],
  },
  {
    title: 'Back-end',
    note: 'Logique applicative, API et fondations côté serveur.',
    items: ['Java', 'Spring Boot', 'PHP', 'Laravel', 'Python', 'Django', 'Flask'],
  },
  {
    title: 'Mobile',
    note: 'Exploration de produits multiplateformes.',
    items: ['React Native', 'Flutter'],
  },
  {
    title: 'Bases de données',
    note: 'Données structurées et raisonnement relationnel.',
    items: ['MySQL', 'Technologies de bases de données relationnelles'],
  },
  {
    title: 'Outils',
    note: 'Environnement de développement quotidien.',
    items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Docker'],
  },
  {
    title: 'Apprentissage automatique & ingénierie des données',
    note: 'Domaines actuellement explorés.',
    items: ['Apprentissage automatique', 'Ingénierie des données'],
  },
  {
    title: 'Cryptographie & motifs de conception',
    note: 'Exploration académique.',
    items: ['Cryptographie', 'Motifs de conception'],
  },
]

export const projects: Project[] = [
  {
    id: 'apptextile',
    name: 'AppTextile',
    summary:
      'Concept d’application lié au textile. Résumé provisoire modifiable — à compléter avec le périmètre et le contexte confirmés.',
    details:
      'Espace provisoire pour les détails du projet AppTextile. Ajoutez ici les objectifs, responsabilités et résultats confirmés sans inventer de fonctionnalités.',
    tags: [],
    accent: 'from-electric/30 via-electric/5 to-transparent',
  },
  {
    id: 'pharmagest',
    name: 'PharmaGest',
    summary:
      'Application de gestion pharmaceutique. Résumé provisoire modifiable en attente des informations confirmées.',
    details:
      'Espace provisoire pour les détails du projet PharmaGest. Documentez les fonctionnalités, le rôle et les choix techniques vérifiés dès qu’ils seront disponibles.',
    tags: [],
    accent: 'from-violet/25 via-electric/10 to-transparent',
  },
  {
    id: 'delivery-app',
    name: 'Application de livraison',
    summary:
      'Projet d’application de livraison. Résumé provisoire modifiable, à affiner avec des informations validées.',
    details:
      'Espace provisoire pour les détails de l’application de livraison. Remplacez ce texte par les parcours, contributions et résultats confirmés.',
    tags: [],
    accent: 'from-electric/25 via-sky-400/5 to-transparent',
  },
  {
    id: 'apprencontre',
    name: 'AppRencontre',
    summary:
      'Application de rencontres et de socialisation. Résumé provisoire modifiable en attente des notes confirmées sur les fonctionnalités et la réalisation.',
    details:
      'Espace provisoire pour les détails du projet AppRencontre. Ajoutez ici le contexte produit vérifié et les points forts de la réalisation.',
    tags: [],
    accent: 'from-violet/20 via-electric/10 to-transparent',
  },
  {
    id: 'smartfokontany',
    name: 'SmartFokontany',
    summary:
      'Initiative de modernisation numérique des services des fokontany à Madagascar. Résumé provisoire modifiable en attente des détails confirmés.',
    details:
      'Espace provisoire pour les détails du projet SmartFokontany. Précisez les objectifs, les parties prenantes et le périmètre de la solution dès validation.',
    tags: [],
    accent: 'from-electric/30 via-violet/10 to-transparent',
  },
  {
    id: 'tantsahaconnect',
    name: 'TantsahaConnect',
    summary:
      'Plateforme numérique destinée aux agriculteurs. Résumé provisoire modifiable, à compléter avec les informations confirmées.',
    details:
      'Espace provisoire pour les détails du projet TantsahaConnect. Ajoutez les cas d’usage vérifiés, les notes d’architecture et l’impact après confirmation.',
    tags: [],
    accent: 'from-emerald-400/10 via-electric/10 to-transparent',
  },
  {
    id: 'reservsalle',
    name: 'ReservSalle',
    summary:
      'Système de disponibilité et de réservation de salles. Résumé provisoire modifiable en attente des spécifications confirmées.',
    details:
      'Espace provisoire pour les détails du projet ReservSalle. Remplacez ce texte par les besoins validés, les détails d’implémentation et les résultats.',
    tags: [],
    accent: 'from-electric/25 via-violet/5 to-transparent',
  },
]

export const labTracks = [
  {
    title: 'Compétitions d’algorithmes',
    description:
      'Résolution de problèmes chronométrée sous contraintes, avec une attention portée à la clarté, à la rapidité et à l’exactitude.',
    signal: 'contest.mode',
  },
  {
    title: 'Défis logiques',
    description:
      'Exercices de raisonnement structuré qui affinent la décomposition des problèmes et la prise en compte des cas limites.',
    signal: 'logic.trace',
  },
  {
    title: 'Bots stratégiques',
    description:
      'Expériences de prise de décision où les règles, les heuristiques et l’évaluation des états comptent.',
    signal: 'agent.strategy',
  },
  {
    title: 'Jeux',
    description:
      'Systèmes interactifs qui transforment mécaniques et contraintes en logique jouable.',
    signal: 'play.loop',
  },
  {
    title: 'Optimisation',
    description:
      'Affinage des approches pour plus d’efficacité, d’évolutivité et une meilleure utilisation des ressources.',
    signal: 'perf.tune',
  },
  {
    title: 'Expériences de résolution de problèmes',
    description:
      'Explorations itératives des algorithmes, des structures de données et des compromis d’implémentation.',
    signal: 'experiment.log',
  },
]

export const journeySteps = [
  {
    level: 'Licence 1',
    period: 'Fondations',
    focus:
      'Bases de l’informatique, Java, PHP, algorithmes et bases de données',
    detail:
      'Acquisition des bases de la logique de programmation, de la pensée structurée et des concepts essentiels de la persistance des données.',
  },
  {
    level: 'Licence 2',
    period: 'Approfondissement',
    focus:
      'Java avancé, Python, réseaux, optimisation d’algorithmes, développement Java/JSP',
    detail:
      'Exploration de systèmes plus complexes, de la résolution de problèmes avec souci des performances et de la conception d’applications en réseau.',
  },
  {
    level: 'Licence 3',
    period: 'Ingénierie',
    focus:
      'Génie logiciel, développement full-stack et mobile, Spring Boot, Laravel, Django/Flask, React, Angular, React Native, Flutter, introduction à l’apprentissage automatique et à l’ingénierie des données',
    detail:
      'Connexion entre architecture, développement produit et explorations émergentes autour des données, dans une pratique d’ingénierie plus large.',
  },
]
