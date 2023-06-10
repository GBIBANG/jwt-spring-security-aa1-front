import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColumnsProcessService {

  allViewcolumns = [
    {
      field: 'distanceLeftInterval',
      header: 'Dist gauche interne'
    },
    {
      field: 'distanceRightInterval',
      header: 'Dist droite interne'
    },
    {
      field: 'weightLeftInterval',
      header: 'Poids gauche interne'
    },
    {
      field: 'weightRightInterval',
      header: 'Poids droite interne'
    },
    {
      field: 'price',
      header: 'Tarif'
    },
    {
      field: 'createdTime',
      header: 'Date création'
    }
  ];

  allColumns = [
    {
      field: 'label',
      header: 'Libellé'
    },
    {
      field: 'productTypeName',
      header: 'Type de produit'
    },
    {
      field: 'defaultPrice',
      header: 'Tarif par défaut'
    },
    {
      field: 'stateName',
      header: 'Statut'
    },
    {
      field: 'activeTime',
      header: 'Date activation'
    }
  ];

  allGlobalFilterFields = [
    'stateName',
    'code',
    'label',
    'trainTypeName',
    'carClassName',
    'reducedPercent',
    'stateName'
  ];

  bagageColumns = [
    {
      field: 'label',
      header: 'Libellé'
    },
    {
      field: 'unitPrice',
      header: 'Prix par jour'
    },
    {
      field: 'activeTime',
      header: 'Date activation'
    },
    {
      field: 'stateName',
      header: 'Statut'
    }
  ];

  taaColumns = [
    {
      field: 'label',
      header: 'Libellé'
    },
    {
      field: 'minimumWeight',
      header: 'Poids minimum'
    },
    {
      field: 'unitPriceDistance',
      header: 'Coefficient dist'
    },
    {
      field: 'activeTime',
      header: 'Date activation'
    },
    {
      field: 'stateName',
      header: 'Statut'
    }
  ];

  tfColumns = [
    {
      field: 'label',
      header: 'Libellé'
    },
    {
      field: 'minimumWeight',
      header: 'Poids minimum'
    },
    {
      field: 'unitPriceWeightDistance',
      header: 'Coefficient dist.-poids'
    },
    {
      field: 'activeTime',
      header: "Date d'activation"
    },
    {
      field: 'stateName',
      header: 'Statut'
    }
  ];

  reducedTicketEditedColumns = [
    {
      field: 'userName',
      header: 'Nom(s) complets'
    },
    {
      field: 'createdTime',
      header: "Date & heure de mise à jour"
    }
  ];

  reducedTicketColumns = [
    {
      field: 'code',
      header: 'Code'
    },
    {
      field: 'label',
      header: 'Libellé'
    },
    {
      field: 'reducedPercent',
      header: 'Taux de réduction'
    },
    {
      field: 'activeTime',
      header: "Date d'activation"
    },
    {
      field: 'stateName',
      header: 'Statut'
    }
  ];

  ticketColumns = [
    {
      field: 'code',
      header: 'Code'
    },
    {
      field: 'startDate',
      header: 'Date début'
    },
    {
      field: 'endDate',
      header: 'Date fin'
    },
    {
      field: 'statusCode',
      header: 'Statuts'
    },
    {
      field: 'approvedBy',
      header: 'Approuvé par'
    }
  ];

  reportColumns: any = [
    {
      field: 'reportTypeName',
      header: 'Type',
    },
    {
      field: 'label',
      header: 'Libellé',
    },
    {
      field: 'stateName',
      header: 'Statut',
    },
    {
      field: 'startPeriod',
      header: 'Date début',
    },
    {
      field: 'endPeriod',
      header: 'Date fin'
    }
  ];

  reportSearchColumns: any = [
    {
      field: 'reportTypeName',
      header: 'Type'
    },
    {
      field: 'label',
      header: 'Libellé'
    },
    {
      field: 'stateName',
      header: 'Statut'
    },
    {
      field: 'vendor',
      header: 'Vendeur'
    },
    {
      field: 'posCode',
      header: 'Point de vente'
    },
    {
      field: 'duration',
      header: 'Durée'
    },
    {
      field: 'startPeriod',
      header: 'Date début'
    },
    {
      field: 'endPeriod',
      header: 'Date fin'
    }
  ];

  customersAccountColumns: any = [
    {
      field: 'accountNumber',
      header: 'Code client',
    },
    {
      field: 'contactName',
      header: 'Nom de contact',
    },
    {
      field: 'companyName',
      header: "Nom de l'entreprise",
    },
    {
      field: 'companyCity',
      header: 'Ville',
    },
    {
      field: 'discountRate',
      header: 'Taux de rabais',
    },
    {
      field: 'statusName',
      header: 'Statut'
    }
  ];


  poseColumns: any = [
    {
      field: 'id',
      header: 'ID point de vente'
    },
    {
      field: 'code',
      header: 'Code'
    },
    {
      field: 'name',
      header: 'Nom'
    },
    {
      field: 'posTypeName',
      header: 'Type de point de vente'
    },
    {
      field: 'createdTime',
      header: 'Date de création'
    }
  ];

  poseSearchcolumns = [
    {
      field: 'code',
      header: 'Code'
    },
    {
      field: 'name',
      header: 'Nom'
    },
    {
      field: 'posTypeName',
      header: 'Type de point de vente'
    },
    {
      field: 'latitude',
      header: 'Latitude'
    },
    {
      field: 'longitude',
      header: 'Longitude'
    },
    {
      field: 'createdTime',
      header: 'Date de création'
    }
  ];

  agencyColumns = [
    {
      field: 'posName',
      header: 'Agence accréditée'
    },
    {
      field: 'trainNumber',
      header: 'Numéro de train'
    },
    {
      field: 'departureDate',
      header: 'Date de départ'
    },
    {
      field: 'trainType',
      header: 'Type de train'
    }
  ];

  printTemplateColumns = [
    {
      field: 'name',
      header: 'Nom'
    },
    {
      field: 'type',
      header: 'Type'
    },
    {
      field: 'statusName',
      header: 'Statut'
    },
    {
      field: 'updatedTime',
      header: 'Dernière mise à jour'
    }
  ];

  dashboardRateColumns = [
    {
      field: 'startRate',
      header: 'Taux début'
    },
    {
      field: 'endRate',
      header: 'Taux fin'
    },
    {
      field: 'color',
      header: 'Couleur'
    }
  ];

  poseTypescolumns = [
    {
      field: 'code',
      header: 'Code'
    },
    {
      field: 'label',
      header: 'Libellé'
    }
  ];

  trainTypeColumns = [
    {
      field: 'code',
      header: 'Code'
    },
    {
      field: 'label',
      header: 'Libellé'
    },
    {
      field: 'sequence',
      header: 'Séquence'
    }
  ];

  userTypeColumns = [
    {
      field: 'code',
      header: 'Code'
    },
    {
      field: 'label',
      header: 'Libellé'
    }
  ];

  classColumns = [
    {
      field: 'code',
      header: 'Code'
    },
    {
      field: 'label',
      header: 'Libellé'
    },
    {
      field: 'sequence',
      header: 'Séquence'
    }
  ];

  paymentColumns = [
    {
      field: 'code',
      header: 'Code'
    },
    {
      field: 'label',
      header: 'Libellé'
    },
    {
      field: 'accountingCode',
      header: 'Code comptable'
    }
  ];

  customQueryColumns = [
    {
      field: "name",
      header: "Nom de la requête SQL"
    },
    {
      field: "description",
      header: "Description"
    },
    {
      field: "createdBy",
      header: "Créé par"
    },
    {
      field: "createdTime",
      header: "Date de création"
    }
  ];

  userColumns = [
    {
      field: "firstName",
      header: "Prénom"
    },
    {
      field: "lastName",
      header: "Nom"
    },
    {
      field: "employeeNumber",
      header: "Matricule"
    },
    {
      field: "userTypeName",
      header: "Type d'utilisateur"
    },
    {
      field: "lastLoginTime",
      header: "Der. connexion"
    },
    {
      field: "statusName",
      header: "Statut"
    }
  ];

  userSearchColumns = [
    {
      field: "firstName",
      header: "Prénom"
    },
    {
      field: "lastName",
      header: "Nom"
    },
    {
      field: "employeeNumber",
      header: "Matricule"
    },
    {
      field: "phone",
      header: "Téléphone"
    },
    {
      field: "userTypeName",
      header: "Type d'utilisateur"
    },
    {
      field: "lastLoginTime",
      header: "Der. connexion"
    },
    {
      field: "statusName",
      header: "Statut"
    },
    {
      field: "updatedBy",
      header: "Modifié par"
    }
  ];

  userRelativesColumns = [
    {
      field: 'firstName',
      header: 'Prénom'
    },
    {
      field: 'lastName',
      header: 'Nom'
    },
    {
      field: 'phone',
      header: 'Téléphone'
    },
    {
      field: 'citizenship',
      header: 'Nationalité'
    },
    {
      field: 'relationship',
      header: 'Parenté'
    },
    {
      field: 'tripAllowance',
      header: 'Quota voyages'
    },
    {
      field: 'tripDone',
      header: 'Voyage fait'
    },
    {
      field: 'lastTripTime',
      header: 'Dern. voyage'
    }
  ];

  productTypesColumns = [
    {
      field: 'code',
      header: 'Code'
    },
    {
      field: 'label',
      header: 'Libellé'
    },
    {
      field: 'entityAccount',
      header: 'Compte entité'
    },
    {
      field: 'ohadaAccount',
      header: 'Compte ohada'
    },
    {
      field: 'qui',
      header: 'Qui'
    }
  ];

  rolesColumns = [
    {
      field: 'name',
      header: 'Nom'
    },
    {
      field: 'userTypeName',
      header: "Type d'utilisateur"
    },
    {
      field: 'description',
      header: 'Description'
    },
    {
      field: 'createdTime',
      header: 'Date création'
    }
  ];

  privilegesColumns = [
    {
      field: 'userTypeName',
      header: "Type d'utilisateur"
    },
    {
      field: 'menu',
      header: 'Privilège niveau menu'
    },
    {
      field: 'subMenu',
      header: 'Privilège de sous-menu'
    },
    {
      field: 'description',
      header: 'Description'
    },
    {
      field: 'typeName',
      header: 'Type'
    }
  ];

  agentCategoryColumns = [
    {
      field: "label",
      header: "Label"
    },
    {
      field: "category",
      header: "Catégorie"
    },
    {
      field: "tripAllowance",
      header: "Quota agent"
    },
    {
      field: "childrenAllowance",
      header: "Quota enfant"
    },
    {
      field: "spouseAllowance",
      header: "Quota conjoint(e)"
    }
  ];

  passengerColumns = [
    {
      field: 'trainNumber',
      header: 'Numéro de train'
    },
    {
      field: 'ticketNumber',
      header: 'Numéro billet'
    },
    {
      field: 'lastName',
      header: 'Nom'
    },
    {
      field: 'firstName',
      header: 'Prénom'
    },
    {
      field: 'departureTime',
      header: 'Heure & date de départ'
    },
    {
      field: 'statusName',
      header: 'Statut'
    }
  ];

  passengerSearchColumns = [
    {
      field: 'trainNumber',
      header: 'Train n°'
    },
    {
      field: 'ticketNumber',
      header: 'Numéro billet'
    },
    {
      field: 'lastName',
      header: 'Nom'
    },
    {
      field: 'firstName',
      header: 'Prénom'
    },
    {
      field: 'departureTime',
      header: 'Heure & date de départ'
    },
    {
      field: 'statusName',
      header: 'Statut'
    },
    {
      field: 'departureStation',
      header: 'Départ'
    },
    {
      field: 'arrivalStation',
      header: "Arrivée"
    },
    {
      field: 'carNumber',
      header: "Voiture"
    },
    {
      field: 'seatClass',
      header: "Classe"
    }
  ];

  reportGlobalFilterFields = [
    'reportTypeName',
    'label',
    'stateName',
    'startPeriod',
    'endPeriod'
  ];

  customersAccountGlobalFilterFields = [
    'accountNumber',
    'contactName',
    'companyName',
    'companyCity',
    'discountRate',
    'statusName',
    'updatedBy'
  ];

  privilegesGlobalFilterFields = ['userTypeName','menu','subMenu','description','typeName'];
  poseGlobalFilterFields = ['id', 'code', 'name', 'posTypeName', 'createdTime'];
  agencyGlobalFilterFields = ['posName', 'trainNumber', 'departureDate', 'trainType'];
  printTemplateGlobalFilterFields = ['name', 'type', 'stateName', 'updatedTime'];
  customQueryglobalFilterFields = ['name', 'description', 'createdBy', 'createdTime'];
  userGlobalFilterFields = ['name', 'description', 'createdBy', 'createdTime'];
  roleGlobalFilterFields = ['userTypeName','name','description','createdTime'];
  ticketGlobalFilterFields = ['code', 'startDate', 'endDate', 'approvedBy'];

  passengerGlobalFilterFields = [
    'trainNumber',
    'ticketNumber',
    'lastName',
    'firstName',
    'departureTime',
    'statusName',
    'statusName'
  ];

  reducedTicketGlobalFilterFields = [
    'stateName',
    'code',
    'label',
    'trainTypeName',
    'carClassName',
    'reducedPercent',
    'stateName',
  ];

  constructor() { }

    
}
