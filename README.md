# Urban-Mobility-Ontology 
https://nourelhoudaelgadi.github.io/UrbanMobility-Ontology/index.html

A semantic knowledge base for urban mobility and public transportation, with a specific focus on Demand-Responsive Transport (DRT) services operated by autonomous shuttles.

This repository holds the documentation website of the ontology (version 1.0.0). Open `index.html`, or the GitHub Pages address of this repository.

## Modules

| Module | Prefix | Namespace | Files (without instances) |
|---|---|---|---|
| [DRT core](drt.html) | `DRT:` | `http://www.semanticweb.org/hp/ontologies/2024/6/OnDemand#` | `ontology/drt.rdf`, `ontology/drt.ttl` |
| [GTFS service](gtfs.html) | `GTFS:` | `http://www.semanticweb.org/hp/ontologies/2024/transport#` | `ontology/gtfs.rdf`, `ontology/gtfs.ttl` |
| [Urban infrastructure](infrastructure.html) | `Infrastructure:` | `http://www.semanticweb.org/hp/ontologies/2024/7/Modélisation#` | `ontology/infrastructure.rdf`, `ontology/infrastructure.ttl` |
| [Events and impacts](event.html) | `Events:` | `http://www.semanticweb.org/nelgad01/ontologies/2026/10/Event#` | `ontology/event.rdf`, `ontology/event.ttl` |

The files in `ontology/` are the modules without instances (classes, properties, axioms). To open the whole ontology in Protégé, put the four `.rdf` files and `ontology/catalog-v001.xml` in one folder and open `drt.rdf`.

## Reused ontologies

- GeoSPARQL 1.1 (`geosparql:`): https://docs.ogc.org/is/22-047r1/22-047r1.html
- OWL-Time (`time:`): https://www.w3.org/TR/owl-time/
- Simple Event Model (SEM) (`sem:`): https://semanticweb.cs.vu.nl/2009/11/sem/
- Transport Disruption ontology (Dtx) (`Dtx:`): https://transportdisruption.github.io/transportdisruption.html
- Event Ontology (c4dm) (`event:`): http://motools.sourceforge.net/event/event.html

## Knowledge graphs

The knowledge graphs, that is the modules populated with their instances, are published on Zenodo: https://doi.org/10.5281/zenodo.20054329

## How to cite

Nourelhouda El Gadi, Esma Talhi, Alain Bouju (2026). *Urban-Mobility-Ontology* (version 1.0.0). Zenodo. https://doi.org/10.5281/zenodo.20054329

## Licence

Creative Commons Attribution 4.0 (CC BY 4.0): https://creativecommons.org/licenses/by/4.0/

