﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace APi.Models;
[Table("tb_m_universities")]
    public class University
    {
        [Key, Column("id")]
        public int Id { get; set; }
        
        [Required, Column("name"), MaxLength(100)]
        public string Name { get; set; }

    //Cardinality
    [JsonIgnore]
    public ICollection<Education>? Educations { get; set; } //kalo pake ICollection gini berarti many 
}

