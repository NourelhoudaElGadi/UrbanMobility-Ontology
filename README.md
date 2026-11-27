# Urban-Mobility-Ontology
https://w3id.org/urbanmobility/ · documentation: https://nourelhoudaelgadi.github.io/UrbanMobility-Ontology/

A semantic knowledge base for urban mobility and public transportation, with a specific focus on Demand-Responsive Transport (DRT) services operated by autonomous shuttles.

This repository holds the ontology (version 1.1.0) and its documentation website. Open `index.html`, or the GitHub Pages address of this repository.

## Modules

| Module | Prefix | Ontology IRI | Namespace | Files (without instances) |
|---|---|---|---|---|
| [DRT core](drt.html) | `DRT:` | `https://w3id.org/urbanmobility/drt` | `https://w3id.org/urbanmobility/drt#` | `ontology/drt.rdf`, `ontology/drt.ttl` |
| [GTFS service](gtfs.html) | `GTFS:` | `https://w3id.org/urbanmobility/gtfs` | `https://w3id.org/urbanmobility/gtfs#` | `ontology/gtfs.rdf`, `ontology/gtfs.ttl` |
| [Urban infrastructure](infrastructure.html) | `Infrastructure:` | `https://w3id.org/urbanmobility/infrastructure` | `https://w3id.org/urbanmobility/infrastructure#` | `ontology/infrastructure.rdf`, `ontology/infrastructure.ttl` |
| [Events and impacts](event.html) | `Events:` | `https://w3id.org/urbanmobility/event` | `https://w3id.org/urbanmobility/event#` | `ontology/event.rdf`, `ontology/event.ttl` |

The IRIs are persistent and dereferenceable through [w3id.org](https://w3id.org): a browser is redirected to the documentation page of the term, an RDF client (`Accept: text/turtle` or `application/rdf+xml`) to the ontology file.

To open the whole ontology in Protégé, put the `.rdf` files of `ontology/` and `ontology/catalog-v001.xml` in one folder and open `drt.rdf`.

## Application rules (optional)

`ontology/drt-rules.rdf` / `.ttl` (`https://w3id.org/urbanmobility/drt-rules`) holds the SWRL rules used in the YeloFlex project to classify reservations before route optimisation. They encode choices of that application (thresholds of 20 and 30 minutes) and are not part of the generic ontology. See [rules.html](rules.html).

## Changes in version 1.1.0

- Persistent w3id.org IRIs replace the `http://www.semanticweb.org/...` namespaces of version 1.0.0 (recorded with `owl:priorVersion`).
- Every class, property and individual has an English `rdfs:label` and `rdfs:comment`; the website shows the same text.
- Ontology metadata (title, description, creators, licence, version, citation, preferred prefix).
- SWRL rules moved to the separate application module `drt-rules`.
- Corrections: links from DRT to GTFS restored, GTFS datatypes aligned with the GTFS reference, direction of `GTFS:hasException`, granularity individuals typed, axioms on reserved RDF vocabulary removed (the modules are now in OWL 2 DL).
- Removed: `DRT:maxRideFactor`, `DRT:requestID`, `GTFS:coversArea`, `GTFS:operatesOnRoute` (same meaning as `GTFS:hasRoute`).
- Renamed (accents, apostrophe or spelling in the IRI):

| Version 1.0.0 | Version 1.1.0 |
|---|---|
| `DRT:Capacité` | `DRT:capacity` |
| `DRT:Cout` | `DRT:cost` |
| `DRT:duréeTrajet` | `DRT:journeyDuration` |
| `GTFS:adress` | `GTFS:address` |
| `GTFS:offersupportTo` | `GTFS:offersSupportTo` |
| `GTFS:appliesTotrip` | `GTFS:bookingRuleAppliesToTrip` |
| `Infrastructure:Type_d'activité` | `Infrastructure:activityType` |
| `Infrastructure:sinuosité` | `Infrastructure:segmentSinuosity` |
| `Infrastructure:Longeursegment` | `Infrastructure:LongueurSegment` |
| `Infrastructure:courvaturemax` | `Infrastructure:curvatureMax` |
| `Infrastructure:RondAbout` | `Infrastructure:Roundabout` |
| `Infrastructure:IdRondAbout` | `Infrastructure:IdRoundabout` |
| `Infrastructure:RondAboutEquippedBy` | `Infrastructure:RoundaboutEquippedBy` |

## Reused ontologies

- GeoSPARQL 1.1 (`geosparql:`): https://docs.ogc.org/is/22-047r1/22-047r1.html
- OWL-Time (`time:`): https://www.w3.org/TR/owl-time/
- Simple Event Model (SEM) (`sem:`): https://semanticweb.cs.vu.nl/2009/11/sem/
- Transport Disruption ontology (Dtx) (`Dtx:`): https://transportdisruption.github.io/transportdisruption.html
- Event Ontology (c4dm) (`event:`): http://motools.sourceforge.net/event/event.html

## Knowledge graphs

The knowledge graphs, that is the modules populated with their instances, are published on Zenodo: https://doi.org/10.5281/zenodo.20054329 (version 1.0.0 uses the former namespaces and names).

## How to cite

Nourelhouda El Gadi, Esma Talhi, Alain Bouju (2026). *Urban-Mobility-Ontology* (version 1.1.0). Zenodo. https://doi.org/10.5281/zenodo.20054329

## Licence

Creative Commons Attribution 4.0 (CC BY 4.0): https://creativecommons.org/licenses/by/4.0/
