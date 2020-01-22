LOAD DATA LOCAL INFILE '/root/temp/MainCdr2-LIBRE4.txt' INTO TABLE cdr2 FIELDS TERMINATED BY ';';

LOAD DATA LOCAL INFILE '/home/jorge/Desktop/recover emergencia/audit/MainAudit-LIBRE1.txt' INTO TABLE audit FIELDS TERMINATED BY ';';



LOAD DATA LOCAL INFILE '/root/temp/MainCdr2-LIBRE4.txt' INTO TABLE cdr2 FIELDS TERMINATED BY ';';


2018-08-13 12:39:45;"Agent/21001 Login" <21001>;21001;s;from-internal;SIP/21001-00000000;;AgentLogin;21001;51;45;ANSWERED;3;;1534178385;;;;;;;;;1




LOAD DATA LOCAL INFILE '/home/jorge/Desktop/recover emergencia/audit/MainAudit-LIBRE1.txt' INTO TABLE audit FIELDS TERMINATED BY ';';

id	agent_id	break_id	datetime_init	datetime_end	duration	ext_parked

7;21;;2018-11-22 08:57:03;2018-11-22 09:20:31;0:23:28;



/home/jorge/Desktop/recover emergencia/call_entry


LOAD DATA LOCAL INFILE '/home/jorge/Desktop/recover emergencia/call_entry/MainCallEntry-LIBRE1.txt' INTO TABLE call_entry FIELDS TERMINATED BY ';';

LOAD DATA LOCAL INFILE '/home/jorge/Desktop/recover emergencia/call_entry/call_entry-LIBRE2.txt' INTO TABLE call_entry FIELDS TERMINATED BY ';';

LOAD DATA LOCAL INFILE '/root/temp/march_missing-LIBRE.txt' INTO TABLE call_entry FIELDS TERMINATED BY ';';


Try DISABLE KEYS or

SET FOREIGN_KEY_CHECKS=0;
make sure to

SET FOREIGN_KEY_CHECKS=1;
after.
