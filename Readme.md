# Silverbear Interview Technical Task
This repo contains source code for technical test.

A little bit annoyed at the recruitment consultant for not sending the task over until 
chased 12pm Tuesday.

| RAM		| Storage   | Connectivity									| GPU					    | Weight		| PSU			| CPU													
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| 8 GB		| 1 TB SSD		| 2 x USB 3.0, 4 x USB 2.0					| NVIDIA GeForce GTX 770	| 8.1 kg		| 500 W PSU		| Intel® Celeron™ N3050 Processor
| 16 GB		| 2 TB HDD		| 3 x USB 3.0, 4 x USB 2.0					| NVIDIA GeForce GTX 960	| 12 kg			| 500 W PSU		| AMD FX 4300 Processor
| 8 GB		| 3 TB HDD		| 4 x USB 3.0, 4 x USB 2.0					| Radeon R7360				| 16 lb			| 450 W PSU		| AMD Athlon Quad-Core APU Athlon 5150 
| 16 GB		| 4 TB HDD		| 5 x USB 2.0, 4 x USB 3.0					| NVIDIA GeForce GTX 1080	| 13.8 lb		| 500 W PSU		| AMD FX 8-Core Black Edition FX-8350
| 32 GB		| 750 GB SDD	| 2 x USB 3.0, 2 x USB 2.0, 1 x USB C		| Radeon RX 480				| 7 kg			| 1000 W PSU	| AMD FX 8-Core Black Edition FX-8370 
| 32 GB		| 2 TB SDD		| 2 x USB C, 4 x USB 3.0					| Radeon R9 380				| 6 kg			| 450 W PSU		| Intel Core i7-6700K 4GHz Processor
| 8 GB		| 2 TB HDD		| 8 x USB 3.0								| NVIDIA GeForce GTX 1080	| 15 lb			| 1000 W PSU	| Intel® Core™ i5-6400 Processor
| 16 GB		| 500 GB SDD	| 4 x USB 2.0								| NVIDIA GeForce GTX 770	| 8 lb			| 750 W PSU		| Intel® Core™ i5-6400 Processor
| 2 GB		| 2 TB HDD		| 10 x USB 3.0, 10 x USB 2.0, 10 x USB C	| AMD FirePro W4100			| 9 kg			| 508 W PSU		| Intel Core i7 Extreme Edition 3 GHz Processor
| 512 MB	|80 GB SSD		| 19 x USB 3.0, 4 x USB 2.0					| Radeon RX 480				| 22 lb			| 700 W PSU		| Intel® Core™ i5-6400 Processor
						
											
Using the data in the Spreadsheet provided:

* Organise the data in to a SQL Express database
 **Create a schema that you feel suits your needs and suits the needs of the application
* Create a Single Page Application (SPA) web site/page
 ** Hosted locally on IIS  
 ** Using the Knockout framework
    ** Enables Viewing/Editing the data   
    ** Enables Searching for data
 ** NO POST BACKS!
* Add anything else to the code that you see fit (think outside of the box)
* Remember, this is your chance to impress us, anyone can just produce an out of the box template solution. Show us that you can walk the walk as well as talk the talk!
* Prepare to present your solution in the next interview (the easiest way is to bring in your laptop)
* Send any questions to tom.norton@silverbear.com but use search engines and other material as much as you want
						
## Instrutions 
This requires NPM to be installed i.e. nodejs of a recentish version for build essentually this is invoked as part of the MSBuild build process in the SilverBear.Interview project, not getting to into MSBUILD here

## Notes
This is scaffolded similar to how I did Metis, except for using .Net 5. getting data from service (partial) this should have DB stuff implemented it doesn't because time.
It also currently has no search functionality, no tests etc because time.
there is absolutely no style for the same reasons.

						
						
						
						
						
						