﻿
////////////////////////////////////////////////////////////////////////////////////////
////// Autogenerated - do not modify or be prepared
////////////////////////////////////

(function(global, $data, undefined) {

  
  

  function registerEdmTypes() {
  
    function Edm_Boolean() { };
    $data.Container.registerType('Edm.Boolean', Edm_Boolean);
    $data.Container.mapType(Edm_Boolean, $data.Boolean);
    
    function Edm_Binary() { };
    $data.Container.registerType('Edm.Binary', Edm_Binary);
    $data.Container.mapType(Edm_Binary, $data.Blob);
    
    function Edm_DateTime() { };
    $data.Container.registerType('Edm.DateTime', Edm_DateTime);
    $data.Container.mapType(Edm_DateTime, $data.Date);
    
    function Edm_DateTimeOffset() { };
    $data.Container.registerType('Edm.DateTimeOffset', Edm_DateTimeOffset);
    $data.Container.mapType(Edm_DateTimeOffset, $data.Integer);
    
    function Edm_Time() { };
    $data.Container.registerType('Edm.Time', Edm_Time);
    $data.Container.mapType(Edm_Time, $data.Integer);
    
    function Edm_Decimal() { };
    $data.Container.registerType('Edm.Decimal', Edm_Decimal);
    $data.Container.mapType(Edm_Decimal, $data.Number);
    
    function Edm_Single() { };
    $data.Container.registerType('Edm.Single', Edm_Single);
    $data.Container.mapType(Edm_Single, $data.Number);
    
    function Edm_Double() { };
    $data.Container.registerType('Edm.Double', Edm_Double);
    $data.Container.mapType(Edm_Double, $data.Number);
    
    function Edm_Guid() { };
    $data.Container.registerType('Edm.Guid', Edm_Guid);
    $data.Container.mapType(Edm_Guid, $data.String);
    
    function Edm_Int16() { };
    $data.Container.registerType('Edm.Int16', Edm_Int16);
    $data.Container.mapType(Edm_Int16, $data.Integer);
    
    function Edm_Int32() { };
    $data.Container.registerType('Edm.Int32', Edm_Int32);
    $data.Container.mapType(Edm_Int32, $data.Integer);
    
    function Edm_Int64() { };
    $data.Container.registerType('Edm.Int64', Edm_Int64);
    $data.Container.mapType(Edm_Int64, $data.Integer);
    
    function Edm_Byte() { };
    $data.Container.registerType('Edm.Byte', Edm_Byte);
    $data.Container.mapType(Edm_Byte, $data.Integer);
    
    function Edm_String() { };
    $data.Container.registerType('Edm.String', Edm_String);
    $data.Container.mapType(Edm_String, $data.String);
    
  };
  registerEdmTypes();
  $data.Entity.extend('NorthwindModel.Category', {
    'Category_ID': { key:true,type:'Edm.Int32',nullable:false,computed:true },
    'Category_Name': { type:'Edm.String',nullable:false,required:true,maxLength:15 },
    'Description': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'Picture': { type:'Edm.Binary',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'Products': { type:'Array',elementType:'NorthwindModel.Product',inverseProperty:'Category' }
  });
  $data.Entity.extend('NorthwindModel.Customer', {
    'Customer_ID': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:5 },
    'Company_Name': { type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'Contact_Name': { type:'Edm.String',nullable:true,maxLength:30 },
    'Contact_Title': { type:'Edm.String',nullable:true,maxLength:30 },
    'Address': { type:'Edm.String',nullable:true,maxLength:60 },
    'City': { type:'Edm.String',nullable:true,maxLength:15 },
    'Region': { type:'Edm.String',nullable:true,maxLength:15 },
    'Postal_Code': { type:'Edm.String',nullable:true,maxLength:10 },
    'Country': { type:'Edm.String',nullable:true,maxLength:15 },
    'Phone': { type:'Edm.String',nullable:true,maxLength:24 },
    'Fax': { type:'Edm.String',nullable:true,maxLength:24 },
    'Orders': { type:'Array',elementType:'NorthwindModel.Order',inverseProperty:'Customer' }
  });
  $data.Entity.extend('NorthwindModel.Employee', {
    'Employee_ID': { key:true,type:'Edm.Int32',nullable:false,computed:true },
    'Last_Name': { type:'Edm.String',nullable:false,required:true,maxLength:20 },
    'First_Name': { type:'Edm.String',nullable:false,required:true,maxLength:10 },
    'Title': { type:'Edm.String',nullable:true,maxLength:30 },
    'Birth_Date': { type:'Edm.DateTime',nullable:true },
    'Hire_Date': { type:'Edm.DateTime',nullable:true },
    'Address': { type:'Edm.String',nullable:true,maxLength:60 },
    'City': { type:'Edm.String',nullable:true,maxLength:15 },
    'Region': { type:'Edm.String',nullable:true,maxLength:15 },
    'Postal_Code': { type:'Edm.String',nullable:true,maxLength:10 },
    'Country': { type:'Edm.String',nullable:true,maxLength:15 },
    'Home_Phone': { type:'Edm.String',nullable:true,maxLength:24 },
    'Extension': { type:'Edm.String',nullable:true,maxLength:4 },
    'Photo': { type:'Edm.Binary',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'Notes': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'Reports_To': { type:'Edm.Int32',nullable:true },
    'Orders': { type:'Array',elementType:'NorthwindModel.Order',inverseProperty:'Employee' }
  });
  $data.Entity.extend('NorthwindModel.Order_Detail', {
    'Order_ID': { key:true,type:'Edm.Int32',nullable:false,required:true },
    'Product_ID': { key:true,type:'Edm.Int32',nullable:false,required:true },
    'Unit_Price': { type:'Edm.Decimal',nullable:false,required:true },
    'Quantity': { type:'Edm.Int16',nullable:false,required:true },
    'Discount': { type:'Edm.Single',nullable:false,required:true },
    'Product': { type:'NorthwindModel.Product',required:true,inverseProperty:'Order_Details' },
    'Order': { type:'NorthwindModel.Order',required:true,inverseProperty:'Order_Details' }
  });
  $data.Entity.extend('NorthwindModel.Order', {
    'Order_ID': { key:true,type:'Edm.Int32',nullable:false,required:true },
    'Customer_ID': { type:'Edm.String',nullable:false,required:true,maxLength:5 },
    'Employee_ID': { type:'Edm.Int32',nullable:true },
    'Ship_Name': { type:'Edm.String',nullable:true,maxLength:40 },
    'Ship_Address': { type:'Edm.String',nullable:true,maxLength:60 },
    'Ship_City': { type:'Edm.String',nullable:true,maxLength:15 },
    'Ship_Region': { type:'Edm.String',nullable:true,maxLength:15 },
    'Ship_Postal_Code': { type:'Edm.String',nullable:true,maxLength:10 },
    'Ship_Country': { type:'Edm.String',nullable:true,maxLength:15 },
    'Ship_Via': { type:'Edm.Int32',nullable:true },
    'Order_Date': { type:'Edm.DateTime',nullable:true },
    'Required_Date': { type:'Edm.DateTime',nullable:true },
    'Shipped_Date': { type:'Edm.DateTime',nullable:true },
    'Freight': { type:'Edm.Decimal',nullable:true },
    'Customer': { type:'NorthwindModel.Customer',required:true,inverseProperty:'Orders' },
    'Employee': { type:'NorthwindModel.Employee',inverseProperty:'Orders' },
    'Order_Details': { type:'Array',elementType:'NorthwindModel.Order_Detail',inverseProperty:'Order' },
    'Shipper': { type:'NorthwindModel.Shipper',inverseProperty:'Orders' }
  });
  $data.Entity.extend('NorthwindModel.Product', {
    'Product_ID': { key:true,type:'Edm.Int32',nullable:false,computed:true },
    'Supplier_ID': { type:'Edm.Int32',nullable:true },
    'Category_ID': { type:'Edm.Int32',nullable:true },
    'Product_Name': { type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'English_Name': { type:'Edm.String',nullable:true,maxLength:40 },
    'Quantity_Per_Unit': { type:'Edm.String',nullable:true,maxLength:20 },
    'Unit_Price': { type:'Edm.Decimal',nullable:true },
    'Units_In_Stock': { type:'Edm.Int16',nullable:true },
    'Units_On_Order': { type:'Edm.Int16',nullable:true },
    'Reorder_Level': { type:'Edm.Int16',nullable:true },
    'Discontinued': { type:'Edm.Boolean',nullable:false,required:true },
    'Category': { type:'NorthwindModel.Category',inverseProperty:'Products' },
    'Order_Details': { type:'Array',elementType:'NorthwindModel.Order_Detail',inverseProperty:'Product' },
    'Supplier': { type:'NorthwindModel.Supplier',inverseProperty:'Products' }
  });
  $data.Entity.extend('NorthwindModel.Shipper', {
    'Shipper_ID': { key:true,type:'Edm.Int32',nullable:false,computed:true },
    'Company_Name': { type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'Orders': { type:'Array',elementType:'NorthwindModel.Order',inverseProperty:'Shipper' }
  });
  $data.Entity.extend('NorthwindModel.Supplier', {
    'Supplier_ID': { key:true,type:'Edm.Int32',nullable:false,computed:true },
    'Company_Name': { type:'Edm.String',nullable:false,required:true,maxLength:40 },
    'Contact_Name': { type:'Edm.String',nullable:true,maxLength:30 },
    'Contact_Title': { type:'Edm.String',nullable:true,maxLength:30 },
    'Address': { type:'Edm.String',nullable:true,maxLength:60 },
    'City': { type:'Edm.String',nullable:true,maxLength:15 },
    'Region': { type:'Edm.String',nullable:true,maxLength:15 },
    'Postal_Code': { type:'Edm.String',nullable:true,maxLength:10 },
    'Country': { type:'Edm.String',nullable:true,maxLength:15 },
    'Phone': { type:'Edm.String',nullable:true,maxLength:24 },
    'Fax': { type:'Edm.String',nullable:true,maxLength:24 },
    'Products': { type:'Array',elementType:'NorthwindModel.Product',inverseProperty:'Supplier' }
  });
  $data.EntityContext.extend('JayDataExamples.NorthwindDB.NorthwindEntities', {
    Categories: { type: $data.EntitySet, elementType: NorthwindModel.Category },
      Customers: { type: $data.EntitySet, elementType: NorthwindModel.Customer },
      Employees: { type: $data.EntitySet, elementType: NorthwindModel.Employee },
      Order_Details: { type: $data.EntitySet, elementType: NorthwindModel.Order_Detail },
      Orders: { type: $data.EntitySet, elementType: NorthwindModel.Order },
      Products: { type: $data.EntitySet, elementType: NorthwindModel.Product },
      Shippers: { type: $data.EntitySet, elementType: NorthwindModel.Shipper },
      Suppliers: { type: $data.EntitySet, elementType: NorthwindModel.Supplier }
  });
  
JayDataExamples.NorthwindDB.context = new JayDataExamples.NorthwindDB.NorthwindEntities( { name:'oData', oDataServiceHost: 'http://localhost:50538/Knockoutjs/Northwind.svc' });

      
  })(window, $data);
      
    