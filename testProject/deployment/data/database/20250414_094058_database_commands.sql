CREATE TABLE "nativemobile$card" (
	"id" BIGINT NOT NULL,
	"cardnumber" VARCHAR_IGNORECASE(2147483647) NULL,
	"cvv" VARCHAR_IGNORECASE(200) NULL,
	"expirydate" VARCHAR_IGNORECASE(200) NULL,
	"nameoncard" VARCHAR_IGNORECASE(200) NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('b79d8b29-eb98-4e6b-ae7d-63c00861c043', 'NativeMobile.Card', 'nativemobile$card', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('458a1721-f473-4a3e-b8b8-5d43ccb20e93', 'b79d8b29-eb98-4e6b-ae7d-63c00861c043', 'CardNumber', 'cardnumber', 30, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('c50cfb6a-22e9-4de2-aff0-a537384178bb', 'b79d8b29-eb98-4e6b-ae7d-63c00861c043', 'CVV', 'cvv', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('4d139d97-4fc9-4562-9df2-4d992d9bec02', 'b79d8b29-eb98-4e6b-ae7d-63c00861c043', 'ExpiryDate', 'expirydate', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('02c52320-cc5c-44a7-aee1-809a639f42fc', 'b79d8b29-eb98-4e6b-ae7d-63c00861c043', 'NameOnCard', 'nameoncard', 30, 200, '', false);
CREATE TABLE "nativemobile$cards" (
	"id" BIGINT NOT NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('c490e62f-7ac8-4356-b24f-b39d43bff9ad', 'NativeMobile.Cards', 'nativemobile$cards', false, false);
CREATE TABLE "nativemobile$card_cards" (
	"nativemobile$cardid" BIGINT NOT NULL,
	"nativemobile$cardsid" BIGINT NOT NULL,
	PRIMARY KEY("nativemobile$cardid","nativemobile$cardsid"),
	CONSTRAINT "uniq_nativemobile$card_cards_nativemobile$cardid" UNIQUE ("nativemobile$cardid"),
	CONSTRAINT "frn_nativemobile$card_cards_nativemobile$cardid" FOREIGN KEY ( "nativemobile$cardid" ) REFERENCES "nativemobile$card" ( "id" ) ON DELETE CASCADE,
	CONSTRAINT "frn_nativemobile$card_cards_nativemobile$cardsid" FOREIGN KEY ( "nativemobile$cardsid" ) REFERENCES "nativemobile$cards" ( "id" ) ON DELETE CASCADE);
CREATE INDEX "idx_nativemobile$card_cards_nativemobile$cards_nativemobile$card" ON "nativemobile$card_cards" ("nativemobile$cardsid" ASC,"nativemobile$cardid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name", "parent_fkc_name", "child_fkc_name", "parent_fkc_action", "child_fkc_action", "storage_format") VALUES ('1c074126-9547-4b22-a4d6-452af3bb2e96', 'NativeMobile.Card_Cards', 'nativemobile$card_cards', 'b79d8b29-eb98-4e6b-ae7d-63c00861c043', 'c490e62f-7ac8-4356-b24f-b39d43bff9ad', 'nativemobile$cardid', 'nativemobile$cardsid', 'idx_nativemobile$card_cards_nativemobile$cards_nativemobile$card', 'frn_nativemobile$card_cards_nativemobile$cardid', 'frn_nativemobile$card_cards_nativemobile$cardsid', 0, 0, 2);
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_nativemobile$card_cards_nativemobile$cardid', '1c074126-9547-4b22-a4d6-452af3bb2e96', '417bf821-64c3-3e87-a852-e442bb485bc8');
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20250414 09:40:58';
